from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

import api.users.views

urlpatterns = [
    path(
        "/signup/",
        api.users.views.SignupUserApiView.as_view(),
        name="signup",
    ),
    path(
        "/sign-in/",
        TokenObtainPairView.as_view(),
        name="sign-in",
    ),
    path(
        "api/token/refresh/",
        TokenRefreshView.as_view(),
        name="token_refresh",
    ),
    path(
        "api/token/verify/",
        TokenVerifyView.as_view(),
        name="token_verify",
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
