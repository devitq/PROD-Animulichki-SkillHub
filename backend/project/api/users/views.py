
import io

import pandas as pd
from django.http import FileResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet

from api.events.models import Event
from api.users.models import User
from api.users.serializers import UserSerializer


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


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
            data = pd.read_excel(excel_file)

            for _, row in data.iterrows():
                user = User.objects.create(
                    first_name=row["first_name"],
                    last_name=row["last_name"],
                    email=row["email"],
                    birth_date=row["birth_date"],
                    bio=row["bio"],
                )

                event.users.add(user)

            return Response(
                {"success": "Users registered successfully"},
                status=status.HTTP_201_CREATED,
            )

        except Exception as e:  # noqa: BLE001
            return Response(
                {"error": str(e)}, status=status.HTTP_400_BAD_REQUEST
            )


class DownloadUsersFromExcelView(APIView):
    def get(self, _, event_id):
        try:
            users = Event.objects.get(pk=event_id).users
        except Event.DoesNotExist:
            return Response(
                {"error": "Event does not exist"},
                status=status.HTTP_404_NOT_FOUND,
            )

        serializer = UserSerializer(users, many=True)
        data = serializer.data

        data = pd.DataFrame(data)

        excel_data = io.BytesIO()
        data.to_excel(excel_data, index=False)
        excel_data.seek(0)

        return FileResponse(excel_data, filename="users.xlsx")
