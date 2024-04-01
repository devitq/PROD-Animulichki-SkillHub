import uuid

from django.contrib.auth.models import AbstractUser
from django.core import validators
from django.db import models

from api.core.models import AbstractTag


class Skill(AbstractTag):
    level = models.IntegerField(
        validators=[
            validators.MinValueValidator(1),
            validators.MaxValueValidator(10),
        ],
    )


class Achievements(models.Model):
    def get_file_path(self, filename):
        folder_name = str(uuid.uuid4())
        return f"achievements/{folder_name}/{filename}"

    file = models.FileField(  # noqa: DJ012
        upload_to=get_file_path,
    )
    info = models.TextField(
        max_length=255,
    )

    def __str__(self):  # noqa: DJ012
        return self.info


class Specialization(AbstractTag):
    pass


class User(AbstractUser):
    def get_file_path(self, filename):
        folder_name = str(uuid.uuid4())
        return f"avatars/{folder_name}/{filename}"

    email = models.EmailField(unique=True)
    birthday = models.DateField(
        blank=True,
        null=True,
    )
    avatar = models.ImageField(
        upload_to=get_file_path,
        max_length=200,
        null=True,
    )
    country = models.TextField(
        blank=True,
    )
    city = models.TextField(
        blank=True,
    )
    experience = models.IntegerField(
        validators=[
            validators.MinValueValidator(0),
            validators.MinValueValidator(100),
        ],
        null=True,
    )
    bio = models.TextField(
        blank=True,
        validators=[
            validators.MaxLengthValidator(
                512,
            ),
        ],
    )

    skills = models.ManyToManyField(
        Skill,
        blank=True,
    )

    achievements = models.ManyToManyField(
        Achievements,
        blank=True,
    )

    specialization = models.ForeignKey(
        Specialization,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )

    def __str__(self):
        return self.username
