from django.conf import settings
from django.contrib import admin
from django.urls import include, path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view

schema_view = get_schema_view(
    openapi.Info(title="SkillHub API", default_version="1")
)

urlpatterns = [
    # Built-in urls
    path("admin/", admin.site.urls),
    # API documentation
    path(
        "swagger/",
        schema_view.with_ui("swagger"),
        name="swagger",
    ),
    path(
        "redoc/",
        schema_view.with_ui("redoc"),
        name="redoc",
    ),
    # API
    path("api/", include("api.urls")),
]

if settings.DEBUG and not (settings.TESTING or settings.MIGRATING):
    urlpatterns += (path("__debug__/", include("debug_toolbar.urls")),)
