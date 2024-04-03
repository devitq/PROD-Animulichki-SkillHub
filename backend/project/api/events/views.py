from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet

from api.events.models import Event
from api.events.serializers import EventSerializer
from api.users.serializers import UserSerializer
from api.events.utils import get_teams


class EventViewSet(ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventUsersApiView(APIView):
    def get(self, request, event_id):  # noqa: ARG002
        try:
            event = Event.objects.get(pk=event_id)
        except Event.DoesNotExist:
            return Response(
                {"error": "Event does not exist"},
                status=status.HTTP_404_NOT_FOUND,
            )

        users = event.users.all()
        serializer = UserSerializer(users, many=True)

        return Response(serializer.data)


class RunAlgorythmView(APIView):
    def post(self, request, event_id):  # noqa: ARG002
        try:
            event = Event.objects.get(pk=event_id)
        except Event.DoesNotExist:
            return Response(
                {"error": "Event does not exist"},
                status=status.HTTP_404_NOT_FOUND,
            )
        teams = get_teams(event)

        return Response(teams)
