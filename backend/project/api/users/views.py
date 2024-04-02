
import pandas as pd
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet

from api.events.models import Event
from api.users.models import User
from api.users.serializers import UserSerializer
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
import pandas as pd


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


class ExportUsersExcel(APIView):
    def get(self, request, event_id):
        event = Event.objects.get(id=event_id)

        users = event.users.all()

        users_data = {
            "First Name": [user.first_name for user in users],
            "Last Name": [user.last_name for user in users],
            "Email": [user.email for user in users],
            "Birth Date": [
                user.birth_date.strftime("%Y-%m-%d") for user in users
            ],
            "Bio": [user.bio for user in users],
        }
        df = pd.DataFrame(users_data)

        excel_file = pd.ExcelWriter("event_users.xlsx", engine="xlsxwriter")
        df.to_excel(excel_file, index=False, sheet_name="Users")
        excel_file.save()

        with open("event_users.xlsx", "rb") as excel:
            content = excel.read()

        # Удаляем созданный временный файл
        import os

        os.remove("event_users.xlsx")

        # Отправляем Excel файл как HttpResponse
        response = HttpResponse(
            content, content_type="application/vnd.ms-excel"
        )
        response[
            "Content-Disposition"
        ] = 'attachment; filename="event_users.xlsx"'
        return response
