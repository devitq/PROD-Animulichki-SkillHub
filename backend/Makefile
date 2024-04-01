dump:
	@cd project && python -Xutf8 manage.py dumpdata --format json --indent 4 -o fixtures/data.json

load:
	@cd project && python -Xutf8 manage.py loaddata fixtures/data.json

mig:
	@cd project && python manage.py makemigrations
	@cd project && python manage.py migrate

check: test
	@ruff check --fix

test:
	@cd project && python manage.py test

run:
	@cd project && python manage.py runserver

su:
	@cd project && python manage.py createsuperuser

loc-m:
	@cd project && django-admin makemessages -l ru -l en

loc-c:
	@cd project && django-admin compilemessages

help:
	@cd project && python manage.py help

sort:
	sort-requirements requirements/prod.txt requirements/test.txt requirements/dev.txt
