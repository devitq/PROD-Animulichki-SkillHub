from datetime import timedelta

import bcrypt
import jwt
from django.conf import settings
from django.utils import timezone
from rest_framework import status
from rest_framework.exceptions import (
    NotAuthenticated,
    PermissionDenied,
    ValidationError,
)
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from api.users.models import User
from api.users.serializers import (
    PasswordChangeSerializer,
    UpdateProfileSerializer,
    UserLoginSerializer,
    UserProfileSerializer,
    UserRegistrationSerializer,
)


class SignupUserApiView(APIView):
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)

        if serializer.is_valid():
            password = serializer.validated_data["password"]
            password_hash = bcrypt.hashpw(
                password.encode("utf-8"), bcrypt.gensalt()
            ).decode("utf-8")
            serializer.validated_data["password"] = password_hash

            serializer.save()

            return Response("ok", status=status.HTTP_201_CREATED)

        raise ValidationError(serializer.errors)


class SigninUserApiView(APIView):
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)

        if not serializer.is_valid():
            raise ValidationError(serializer.errors)

        username = serializer.validated_data.get("username")
        password = serializer.validated_data.get("password")

        user = User.objects.filter(username=username).first()

        if user is not None:
            if not bcrypt.checkpw(
                password.encode("utf-8"), user.password.encode("utf-8")
            ):
                raise NotAuthenticated(
                    {"error": "Invalid credentials"},
                )
        else:
            raise NotAuthenticated(
                {"error": "Invalid credentials"},
            )

        token = jwt.encode(
            {
                "id": user.id,
                "password": password,
                "exp": timezone.now() + timedelta(hours=24),
            },
            settings.SECRET_KEY,
            algorithm="HS256",
        )

        return Response({"token": token})


class ProfileMeApiView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data)

    def patch(self, request):
        user = request.user
        serializer = UpdateProfileSerializer(
            user, data=request.data, partial=True
        )
        if serializer.is_valid():
            errors = User.check_unique(user.id, serializer.validated_data)
            if errors:
                return Response(
                    {"reason:": str(errors)}, status=status.HTTP_409_CONFLICT
                )
            serializer.save()

            return Response(self._get_profile_data(user))

        raise ValidationError(serializer.errors)


class PasswordChangeApiView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = PasswordChangeSerializer(data=request.data)

        if serializer.is_valid():
            old_password = serializer.validated_data.get("oldPassword")
            new_password = serializer.validated_data.get("newPassword")

            if bcrypt.checkpw(
                old_password.encode("utf-8"),
                request.user.password.encode("utf-8"),
            ):
                password_hash = bcrypt.hashpw(
                    new_password.encode("utf-8"), bcrypt.gensalt()
                ).decode("utf-8")
                request.user.password = password_hash
                request.user.save()

                return Response({"status": "ok"}, status=status.HTTP_200_OK)

            raise PermissionDenied({"error": "Invalid old password"})

        raise ValidationError(serializer.errors)
