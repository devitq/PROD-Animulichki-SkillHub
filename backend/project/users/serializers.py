import rest_framework.serializers

import users.models


class UserSerializer(rest_framework.serializers.ModelSerializer):
    class Meta:
        model = users.models.User
        fields = (
            "email",
            "birthday",
            "country",
            "city",
            "bio",
            "avatar",
            "password",
            "first_name",
            "last_name",
            "tag",
            "specialization",
            "experience",
            "achievements",
            "username",
        )

    extra_kwargs = {"password": {"write_only": True}}
