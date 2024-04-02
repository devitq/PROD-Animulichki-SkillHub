from django.urls import include, path

urlpatterns = [
    path(
        "users/",
        include("api.users.urls", namespace="users"),
    ),
    path(
        "events/",
        include("api.events.urls", namespace="events"),
    )
]
