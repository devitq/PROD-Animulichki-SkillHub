import rest_framework.generics
import rest_framework.permissions
import rest_framework.response
import rest_framework.viewsets

import users.models
import users.serializers


class UserViewSet(rest_framework.viewsets.ModelViewSet):
    http_method_names = ("get",)

    queryset = users.models.User.objects.all()
    serializer_class = users.serializers.UserSerializer
    permission_classes = [rest_framework.permissions.IsAuthenticated]


class RegisterView(rest_framework.generics.CreateAPIView):
    http_method_names = ("post",)
    serializer_class = users.serializers.UserSerializer

    def post(self, request):
        if users.models.User.objects.filter(
            username=request.data.get("username"),
        ).exists():
            return rest_framework.response.Response(
                {
                    "username": [
                        "пользователь с таким именем уже существует.",
                    ],
                },
                status=rest_framework.status.HTTP_409_CONFLICT,
            )

        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return rest_framework.response.Response(
                serializer.data,
                status=rest_framework.status.HTTP_201_CREATED,
            )

        return rest_framework.response.Response(
            serializer.errors,
            status=rest_framework.status.HTTP_400_BAD_REQUEST,
        )
