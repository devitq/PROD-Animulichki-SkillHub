from django.urls import include, path
from rest_framework import routers

from api.users.views import (
    DownloadUsersFromExcelView,
    RegisterUsersFromExcelView,
    UserViewSet,
    UsersByEvent,
)

app_name = "users"

router = routers.DefaultRouter()
router.register("", UserViewSet)


urlpatterns = [
    path("", include(router.urls)),
    path(
        "by-event/<event_id>/",
        UsersByEvent.as_view(),
        name="users-by-event",
    ),
    path(
        "upload/excel/<event_id>/",
        RegisterUsersFromExcelView.as_view(),
        name="excel-upload",
    ),
    path(
        "download/excel/<event_id>/",
        DownloadUsersFromExcelView.as_view(),
        name="excel-download",
    ),
]
