from pathlib import Path

import pandas as pd
from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ReadOnlyModelViewSet

from api.events.models import Event
from api.users.models import User
from api.users.serializers import UserSerializer


class RegisterUserView(CreateAPIView):
    http_method_names = ("post",)
    serializer_class = UserSerializer


class UserViewSet(ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


#! Починить вьюшку, сделать экспорт
class RegisterUsersFromExcelView(APIView):
    def post(self, request, event_id):
        try:
            event = Event.objects.get(pk=event_id)
        except Event.DoesNotExist:
            return Response(
                {"error": "Event does not exist"},
                status=status.HTTP_404_NOT_FOUND,
            )

        excel_file = request.FILES.get("excel_file")
        if not excel_file:
            return Response(
                {"error": "No Excel file provided"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            df = pd.read_excel(excel_file)

            for index, row in df.iterrows():
                # Создаем нового пользователя
                user = User.objects.create(
                    first_name=row["First Name"],
                    last_name=row["Last Name"],
                    email=row["Email"],
                    birth_date=row["Birth Date"],
                    bio=row["Bio"],
                )

                event.users.add(user)

            return Response(
                {"success": "Users registered successfully"},
                status=status.HTTP_201_CREATED,
            )

        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_400_BAD_REQUEST
            )
