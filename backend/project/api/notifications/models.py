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
    )
    title = models.CharField(
        max_length=150,
        null=False,
    )
    content = models.TextField(
        verbose_name="content",
        null=False,
    )
    read = models.BooleanField(
        default=False,
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    objects = NotificationManager()

    def __str__(self):
        return self.title
