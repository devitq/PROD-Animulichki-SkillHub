from notifications.models import Notification
from notifications.serializers import NotificationSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated


class UserNotificationsAPIView(generics.ListAPIView):
    serializer_class = NotificationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Notification.objects.by_user(user.id)
