from rest_framework.viewsets import ModelViewSet

from api.tree.models import Tree
from api.tree.serializers import TreeSerializer


class TreeViewSet(ModelViewSet):
    serializer_class = TreeSerializer
    queryset = Tree.objects.all()
