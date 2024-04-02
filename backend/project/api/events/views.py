from rest_framework.generics import CreateAPIView

from api.events.serializers import EventSerializer


class CreateEventView(CreateAPIView):
    http_method_names = ("post",)
    serializer_class = EventSerializer
