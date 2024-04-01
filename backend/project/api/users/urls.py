from django.urls import path

import api.users.views

urlpatterns = [
    path(
        "/signup/",
        api.users.views.SignupUserApiView.as_view(),
        name="signup",
    ),
    path(
        "/login/",
        api.users.views.LoginUserApiView.as_view(),
        name="login",
    ),
    path(
        "/me/profile/",
        api.users.views.ProfileMeApiView.as_view(),
        name="profile-me",
    ),
    path(
        "/me/password/",
        api.users.views.PasswordChangeApiView.as_view(),
        name="password-change",
    ),
]
