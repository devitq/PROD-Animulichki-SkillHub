from django.conf import settings
from django.db import models


class NotificationManager(models.Manager):
    def by_user(self, user_id):
        return self.get_queryset().filter(
            user__id=user_id,
        )


class Notification(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="notifications",
        verbose_name="пользователь",
    )
    title = models.CharField(
        max_length=150,
        verbose_name="заголовок",
        null=False,
    )
    content = models.TextField(
        verbose_name="содержание",
        null=False,
    )
    read = models.BooleanField(
        "дата создания",
        default=False,
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="дата создания",
    )

    objects = NotificationManager()

    class Meta:
        verbose_name = "уведомление"
        verbose_name_plural = "уведомления"

    def __str__(self):
        return self.title
