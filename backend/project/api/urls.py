from django.contrib import admin
from django.urls import include, path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view

schema_view = get_schema_view(
    openapi.Info(title="SkillHub API", default_version="1")
)

urlpatterns = [
    # Built-in views
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
    path(
        "users/",
        include("api.users.urls", namespace="users"),
    ),
    path(
        "events/",
        include("api.events.urls", namespace="events"),
    ),
    path(
        "trees/",
        include("api.tree.urls", namespace="trees"),
    ),
]
