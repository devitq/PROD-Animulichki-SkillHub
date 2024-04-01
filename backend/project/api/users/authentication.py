import bcrypt
import jwt
from django.conf import settings
from rest_framework.authentication import (
    BaseAuthentication,
)
from rest_framework.exceptions import AuthenticationFailed, NotAuthenticated
from rest_framework.permissions import IsAuthenticated

from api.users.models import User


class JWTAuthentication(BaseAuthentication):
    def authenticate_header(self, request):  # noqa: ARG002
        return "Provide a valid token in the 'Authorization' header"

    def authenticate(self, request):
        if IsAuthenticated not in getattr(
            request.resolver_match.func.cls, "permission_classes", []
        ):
            return None

        token = request.headers.get("Authorization", "").split("Bearer ")[-1]

        if not token:
            raise NotAuthenticated

        try:
            payload = jwt.decode(
                token, settings.SECRET_KEY, algorithms=["HS256"]
            )

            user = User.objects.get(id=payload["id"])

            if not bcrypt.checkpw(
                payload["password"].encode("utf-8"),
                user.password.encode("utf-8"),
            ):
                error = "Token has expired"
                raise AuthenticationFailed(error)
        except User.DoesNotExist:
            error = "Invalid token"
            raise AuthenticationFailed(error) from None
        except jwt.ExpiredSignatureError:
            error = "Token has expired"
            raise AuthenticationFailed(error) from None
        except jwt.InvalidTokenError:
            error = "Invalid token"
            raise AuthenticationFailed(error) from None
        else:
            return (user, None)
