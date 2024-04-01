from rest_framework.generics import CreateAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticated

from api.users.serializers import (
    ChangePasswordSerializer,
    UserSerializer,
)


class SignupUserApiView(CreateAPIView):
    http_method_names = ("post",)
    serializer_class = UserSerializer


class ProfileMeApiView(UpdateAPIView):
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user


class PasswordChangeApiView(UpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ChangePasswordSerializer

    def get_object(self):
        return self.request.user
