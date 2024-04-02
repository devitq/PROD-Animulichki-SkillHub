import sys
from pathlib import Path

from environs import Env

BASE_DIR = Path(__file__).resolve().parent.parent

env = Env()
env.read_env(BASE_DIR.parent / ".env")

DEFAULT_HOSTS = ["127.0.0.1", "localhost"]

with env.prefixed("DJANGO_"):
    SECRET_KEY = env("SECRET_KEY", "change-me")
    DEBUG = env.bool("DEBUG", False)
    ALLOWED_HOSTS = env.list("ALLOWED_HOSTS", DEFAULT_HOSTS)
    INTERNAL_IPS = env.list("INTERNAL_IPS", ALLOWED_HOSTS)
    CSRF_TRUSTED_ORIGINS = env.list("CSRF_TRUSTED_ORIGINS", [])
    DB_NAME = env("DB_NAME", "db.sqlite3")

with env.prefixed("POSTGRES_"):
    if not DEBUG:
        POSTGRES_DB = env("DB", "postgres")
        POSTGRES_USER = env("USER", "postgres")
        POSTGRES_PASSWORD = env("PASSWORD", "postgres")
        POSTGRES_HOST = env("HOST", "localhost")
        POSTGRES_PORT = env("PORT", "5432")


TESTING = len(sys.argv) > 1 and sys.argv[1] == "test"
MIGRATING = len(sys.argv) > 1 and (
    "migrate" in sys.argv[1] or "makemigrations" in sys.argv[1]
)


INSTALLED_APPS = [
    # Built-in apps
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    # Third-party apps
    "rest_framework",
    "corsheaders",
    "drf_yasg",
    # Developed apps
    "api",
    "api.users",
    "api.events",
    "api.tree",
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "config.urls"

TEMPLATES_DIR = BASE_DIR / "templates"
TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [TEMPLATES_DIR],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "config.wsgi.application"

if DEBUG:
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.sqlite3",
            "NAME": BASE_DIR / DB_NAME,
        },
    }
else:
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.postgresql_psycopg2",
            "NAME": POSTGRES_DB,
            "USER": POSTGRES_USER,
            "PASSWORD": POSTGRES_PASSWORD,
            "HOST": POSTGRES_HOST,
            "PORT": POSTGRES_PORT,
        },
    }

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": (
            "django.contrib.auth.password_validation"
            ".UserAttributeSimilarityValidator"
        ),
    },
    {
        "NAME": (
            "django.contrib.auth.password_validation.MinimumLengthValidator"
        ),
    },
    {
        "NAME": (
            "django.contrib.auth.password_validation"
            ".CommonPasswordValidator"
        ),
    },
    {
        "NAME": (
            "django.contrib.auth.password_validation"
            ".NumericPasswordValidator"
        ),
    },
]

USE_I18N = True
LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"
USE_TZ = True

STATIC_URL = "static/"
STATIC_ROOT = BASE_DIR / "static"

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

REST_FRAMEWORK = {
    "DEFAULT_FILTER_BACKENDS": [
        "django_filters.rest_framework.DjangoFilterBackend"
    ],
}

if DEBUG and not (TESTING or MIGRATING):
    INSTALLED_APPS.append("debug_toolbar")
    MIDDLEWARE.append("debug_toolbar.middleware.DebugToolbarMiddleware")
