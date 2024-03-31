import django.conf
import django.contrib.admin
import django.urls
import rest_framework_simplejwt.views
import users.views
from django.urls import include, path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions, routers
from teams.views import TeamsViewSet
from users.views import UserViewSet

router = routers.DefaultRouter()
router.register("users", UserViewSet)
router.register("teams", TeamsViewSet)

schema_view = get_schema_view(
    openapi.Info(title="SkillHub API", default_version="v1"),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path(
        "swagger<format>/",
        schema_view.without_ui(cache_timeout=0),
        name="schema-json",
    ),
    path(
        "swagger/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    path(
        "redoc/",
        schema_view.with_ui("redoc", cache_timeout=0),
        name="schema-redoc",
    ),
    path("api/", include(router.urls)),
    path("api/registration/", users.views.RegisterView.as_view()),
    django.urls.path(
        "api/token/",
        rest_framework_simplejwt.views.TokenObtainPairView.as_view(),
        name="token_obtain_pair",
    ),
    django.urls.path(
        "api/token/refresh/",
        rest_framework_simplejwt.views.TokenRefreshView.as_view(),
        name="token_refresh",
    ),
    django.urls.path(
        "api/token/verify/",
        rest_framework_simplejwt.views.TokenVerifyView.as_view(),
        name="token_verify",
    ),
    django.urls.path("admin/", django.contrib.admin.site.urls),
]

if django.conf.settings.DEBUG and not (
    django.conf.settings.TESTING or django.conf.settings.MIGRATING
):
    import debug_toolbar

    urlpatterns.append(
        django.urls.path(
            "__debug__/",
            django.urls.include(debug_toolbar.urls),
        ),
    )
