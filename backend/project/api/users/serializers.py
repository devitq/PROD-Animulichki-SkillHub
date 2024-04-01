from django.contrib.auth.hashers import check_password, make_password
from rest_framework import serializers

from api.users.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "email",
            "birthday",
            "avatar",
            "country",
            "city",
            "bio",
            "experience",
            "password",
            "first_name",
            "last_name",
            "specialization",
            "achievements",
            "username",
            "skills",
        )

    extra_kwargs = {"password": {"write_only": True}}

    def validate(self, attrs):
        if User.objects.filter(username=attrs["username"]).exists():
            raise serializers.ValidationError(
                {"username": "Username already exists"}
            )
        return super().validate(attrs)

    def create(self, validated_data):
        validated_data["password"] = make_password(
            validated_data["password"],
        )
        return super().create(validated_data)


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(write_only=True)
    new_password = serializers.CharField(source="password", write_only=True)

    class Meta:
        model = User
        fields = ("old_password", "new_password")

    def validate_old_password(self, value):
        if not check_password(value, self.instance.password):
            msg = "Wrong password"
            raise serializers.ValidationError(msg)
        return value

    def update(self, instance, validated_data):
        instance.set_password(validated_data["password"])
        instance.save()
        return instance
