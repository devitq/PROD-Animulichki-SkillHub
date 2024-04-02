from django.urls import include, path
from rest_framework import routers

from api.users.views import (
    RegisterUsersFromExcelView,
    RegisterUserView,
    UserViewSet,
)

app_name = "users"

router = routers.DefaultRouter()
router.register(r"users", UserViewSet)


urlpatterns = [
    path("", include(router.urls)),
    path("register/", RegisterUserView.as_view(), name="register"),
    path(
        "upload/excel/<event_id>/",
        RegisterUsersFromExcelView.as_view(),
        name="excel-upload",
    ),
]
