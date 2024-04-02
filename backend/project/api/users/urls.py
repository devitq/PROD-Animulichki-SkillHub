from django.urls import path

from api.users.views import (
    RegisterUsersFromExcelView,
    RegisterUserView,
)

app_name = "users"

urlpatterns = [
    path("register/", RegisterUserView.as_view(), name="register"),
    path(
        "upload/excel/<event_id>/",
        RegisterUsersFromExcelView.as_view(),
        name="excel-upload",
    ),
]
