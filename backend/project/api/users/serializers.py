from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers

from api.users.models import User


class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "first_name",
            "last_name",
            "username",
            "email",
            "password",
            "country",
            "city",
        ]

    def validate_password(self, value):
        validate_password(value)

        return value


class UserLoginSerializer(serializers.Serializer):
    remember_me = serializers.BooleanField(default=False, required=False)
    username = serializers.CharField()
    password = serializers.CharField()


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "first_name",
            "last_name",
            "username",
            "email",
            "birthday",
            "country",
            "city",
            "bio",
            "avatar",
            "experience",
            "specialization",
            "achievements",
            "skills",
        )


class UpdateProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "countryCode",
            "isPublic",
            "phone",
            "image",
        ]

    def to_representation(self, instance):
        data = super().to_representation(instance)
        if data["image"] is None:
            del data["image"]
        if data["phone"] is None:
            del data["phone"]
        return data


class PasswordChangeSerializer(serializers.Serializer):
    # ruff: noqa: N815
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

    def validate_password(self, value):
        validate_password(value)

        return value
