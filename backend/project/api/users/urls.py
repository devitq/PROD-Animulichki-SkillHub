from django.urls import path

import api.users.views

urlpatterns = [
    path(
        "/sign-up/",
        api.users.views.SignupUserApiView.as_view(),
        name="sign-up",
    ),
    path(
        "/sign-in/",
        api.users.views.SigninUserApiView.as_view(),
        name="sign-in",
    ),
    path(
        "/me/profile/",
        api.users.views.ProfileMeApiView.as_view(),
        name="profile-me",
    ),
    path(
        "/me/updatePassword/",
        api.users.views.PasswordChangeApiView.as_view(),
        name="password-change",
    ),
]
