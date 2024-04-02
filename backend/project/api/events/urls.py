from django.urls import path

from api.events.views import CreateEventView

app_name = "events"

urlpatterns = [
    path("create/", CreateEventView.as_view(), name="create"),
]
