from django.urls import include, path
from rest_framework.routers import DefaultRouter

from api.tree.views import TreeViewSet

app_name = "tree"

router = DefaultRouter()
router.register("", TreeViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
