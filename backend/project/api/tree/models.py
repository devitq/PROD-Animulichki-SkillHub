from django.db import models


class Tree(models.Model):
    name = models.CharField(
        max_length=255,
        unique=True,
    )
    data = models.JSONField()

    def __str__(self):
        return self.name
