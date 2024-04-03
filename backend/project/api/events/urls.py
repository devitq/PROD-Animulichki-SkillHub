from django.urls import include, path
from rest_framework import routers

from api.events import views
from api.events.views import EventViewSet

app_name = "events"
router = routers.DefaultRouter()
router.register("", EventViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("<event_id>/users/", views.EventUsersApiView.as_view(), name="users"),
    path(
        "<event_id>/run_algorythm/",
        views.RunAlgorythmView.as_view(),
        name="run_algotythm",
    ),
]
