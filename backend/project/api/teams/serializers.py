from rest_framework import serializers
from api.teams.models import Team, Vacancy
from datetime import datetime, timedelta, timezone


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ["id", "name", "description"]


class VacancySerializer(serializers.ModelSerializer):
    min_age = serializers.IntegerField(write_only=True, required=True)
    max_age = serializers.IntegerField(write_only=True, required=True)

    class Meta:
        model = Vacancy
        fields = "__all__"

    def create(self, validated_data):
        min_age = validated_data.pop("min_age")
        max_age = validated_data.pop("max_age")

        validated_data["start_date"] = datetime.now(
            timezone.utc
        ).date() - timedelta(days=365 * min_age)
        validated_data["end_date"] = datetime.now(
            timezone.utc
        ).date() - timedelta(days=365 * max_age)

        return Team.objects.create(**validated_data)
