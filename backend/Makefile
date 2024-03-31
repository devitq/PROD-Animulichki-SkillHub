dump:
	@cd project && python -Xutf8 manage.py dumpdata users --format json --indent 4 -o fixtures/users.json

load:
	@cd project && python -Xutf8 manage.py loaddata fixtures/users.json

mig:
	@cd project && python manage.py makemigrations
	@cd project && python manage.py migrate

check: test
	@ruff check

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

fix:
	ruff check --fix
	sort-requirements requirements/prod.txt requirements/test.txt requirements/dev.txt

req:
	@pip install -r requirements/dev.txt
