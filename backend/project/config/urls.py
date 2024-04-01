from django.conf import settings
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    # Built-in urls
    path("admin/", admin.site.urls),
    path(
        "api-auth/",
        include(
            "rest_framework.urls",
            namespace="rest_framework",
        ),
    ),
    # API
    path("api/", include("api.urls")),
]

if settings.DEBUG and not (settings.TESTING or settings.MIGRATING):
    urlpatterns += (path("__debug__/", include("debug_toolbar.urls")),)
