from django.urls import path

from .views import AddUserToTeam

urlpatterns = [
    path(
        "add_user_to_team/<int:team_id>/<int:user_id>/",
        AddUserToTeam.as_view(),
        name="add_user_to_team",
    ),
]
