from django.core import validators
from django.db import models

from api.users.models import Skill, Specialization, User


class Vacancy(models.Model):
    name = models.CharField(
        max_length=255,
    )
    start_date = models.DateField(
        blank=True,
        null=True,
    )
    end_date = models.DateField(
        blank=True,
        null=True,
    )
    specialization = models.ForeignKey(
        Specialization,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )
    skills = models.ManyToManyField(
        Skill,
        blank=True,
        related_name="vacancies",
    )
    users = models.ManyToManyField(
        User,
        blank=True,
        related_name="vacancies",
    )

    def __str__(self):
        return self.name


class Team(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    members = models.ManyToManyField(
        User,
        blank=True,
    )

    vacancies = models.ManyToManyField(
        Vacancy,
        blank=True,
    )

    avatar = models.ImageField(
        upload_to="teams_avatars",
        blank=True,
    )

    count_of_members = models.IntegerField(
        validators=[
            validators.MinValueValidator(1),
            validators.MaxLengthValidator(5),
        ],
        verbose_name="количество участников",
        null=True,
    )

    country = models.CharField(
        blank=True,
        max_length=255,
        verbose_name="страна",
    )

    city = models.CharField(
        blank=True,
        max_length=255,
        verbose_name="город",
    )

    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="teams"
    )

    def __str__(self):
        return self.name
