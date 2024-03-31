from django.contrib.auth.models import AbstractUser
from django.core import validators
from django.db import models


class AbstractTag(models.Model):
    name = models.CharField(
        max_length=255,
        unique=True,
    )

    class Meta:
        abstract = True

    def __str__(self):
        return self.name


class Tag(AbstractTag):
    pass


class Skill(AbstractTag):
    level = models.IntegerField(
        validators=[
            validators.MinValueValidator(1),
            validators.MaxValueValidator(10),
        ],
        verbose_name="уровень навыка",
    )


class Specialization(AbstractTag):
    pass


class Achievements(models.Model):
    name = models.CharField(
        max_length=255,
        verbose_name="Название достижения",
    )

    info = models.TextField(
        max_length=255,
        verbose_name="Информация про достижение",
    )

    file = models.FileField(
        upload_to="achievements",
        verbose_name="Файл достижения",
    )

    def __str__(self):
        return self.name


class User(AbstractUser):
    email = models.EmailField("электронная почта", unique=True)

    birthday = models.DateField(
        verbose_name="дата рождения",
        help_text="Введите дату рождения",
        blank=True,
        null=True,
    )

    avatar = models.ImageField(
        upload_to="avatars",
        blank=True,
        verbose_name="Аватарка",
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

    bio = models.TextField(
        blank=True,
        validators=[
            validators.MaxLengthValidator(
                512,
            ),
        ],
        verbose_name="обо мне",
    )

    skills = models.ManyToManyField(
        Skill,
        blank=True,
        verbose_name="технологии",
    )

    tag = models.ManyToManyField(
        Tag,
        blank=True,
        verbose_name="теги",
    )

    experience = models.IntegerField(
        validators=[
            validators.MinValueValidator(0),
            validators.MinValueValidator(100),
        ],
        verbose_name="опыт работы",
        null=True,
    )

    achievements = models.ManyToManyField(
        Achievements,
        blank=True,
        verbose_name="достижения",
    )

    specialization = models.ForeignKey(
        Specialization,
        on_delete=models.CASCADE,
        blank=True,
        verbose_name="специализация",
        null=True,
    )
