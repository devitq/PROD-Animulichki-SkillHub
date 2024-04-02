from django.db import models

from api.core.models import BaseModel


class User(BaseModel):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    birth_date = models.DateTimeField()
    bio = models.TextField()
    skills = models.JSONField(default=dict)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
