from rest_framework import serializers

from api.events.models import Event, Tree


class EventSerializer(serializers.ModelSerializer):
    tree = serializers.JSONField(write_only=True)

    class Meta:
        model = Event
        fields = "__all__"

    def create(self, validated_data):
        tree = Tree.objects.get_or_create(pk=validated_data.pop("tree"))

        validated_data["tree"] = tree.id

        return Event.objects.create(**validated_data)
