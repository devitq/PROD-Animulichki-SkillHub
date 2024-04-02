from django.urls import include, path
from rest_framework import routers

from api.users.views import (
    RegisterUsersFromExcelView,
    UserViewSet,
)

app_name = "users"

router = routers.DefaultRouter()
router.register("", UserViewSet)


urlpatterns = [
    path("", include(router.urls)),
    path(
        "upload/excel/<event_id>/",
        RegisterUsersFromExcelView.as_view(),
        name="excel-upload",
    ),
]
