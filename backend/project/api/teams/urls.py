from django.urls import path

from .views import AddUserToTeam, CreateVacancy

urlpatterns = [
    path(
        "add_user_to_team/<int:team_id>/<int:user_id>/",
        AddUserToTeam.as_view(),
        name="add_user_to_team",
    ),
    path(
        "create_vacancy/",
        CreateVacancy.as_view(),
        name="create_vacancy",
    ),
]
