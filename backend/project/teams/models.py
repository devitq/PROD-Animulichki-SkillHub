import users.models
from django.core import validators
from django.db import models


class Vacancy(models.Model):
    name = models.CharField(
        max_length=255,
        verbose_name="название вакансии",
    )
    start_date = models.DateField(
        verbose_name="дата начала диапазона возраста участников",
        blank=True,
        null=True,
    )

    end_date = models.DateField(
        verbose_name="дата конец диапазона возраста участников",
        blank=True,
        null=True,
    )
    specialization = models.ForeignKey(
        users.models.Specialization,
        on_delete=models.CASCADE,
        blank=True,
        verbose_name="специализация",
        null=True,
    )
    skills = models.ManyToManyField(
        users.models.Skill,
        blank=True,
        verbose_name="Технологии",
    )

    def __str__(self):
        return self.name


class Team(models.Model):
    description = models.TextField(
        verbose_name="описание команды",
    )

    name = models.CharField(
        verbose_name="название команды",
        max_length=255,
    )

    members = models.ManyToManyField(
        users.models.User,
        verbose_name="участники",
    )

    vacancies = models.ManyToManyField(
        Vacancy,
        verbose_name="вакансии",
    )

    avatar = models.ImageField(
        upload_to="teams_avatars",
        blank=True,
        verbose_name="аватарка",
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
        users.models.User,
        on_delete=models.CASCADE,
        related_name="teams",
    )

    def __str__(self):
        return self.name
