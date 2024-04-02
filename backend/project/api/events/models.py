from django.db import models

from api.core.models import BaseModel


class Event(BaseModel):
    title = models.CharField(max_length=255)
    users = models.ManyToManyField(
        "users.User",
        related_name="events",
        blank=True,
    )

    def __str__(self):
        return self.title
