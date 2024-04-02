from rest_framework import serializers

from api.events.models import Event
from api.users.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

    def create(self, validated_data):
        try:
            event = Event.objects.get(
                pk=self.context["view"].kwargs.get("event_id")
            )
        except Event.DoesNotExist as e:
            msg = "Event does not exist"
            raise serializers.ValidationError(msg) from e

        user = User.objects.create(**validated_data)
        event.users.add(user)

        return user
