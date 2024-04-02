from rest_framework.viewsets import ModelViewSet

from api.events.models import Event
from api.events.serializers import EventSerializer


class EventViewSet(ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
