from django.conf import settings
from django.core.mail import send_mail
from django.template.loader import render_to_string


def send_mails_for_commands(teams):
    subject = "Ваша команда"
    from_mail = settings.EMAIL_HOST_USER
    template_name = "mail.html"
    context = {}
    for team in teams:
        to_mails = [x["email"] for x in team]
        context = {
            "team": team,
        }
        html_content = render_to_string(template_name, context)
        send_mail(
            subject=subject,
            from_email=from_mail,
            recipient_list=to_mails,
            message="Круто",
            fail_silently=True,
            html_message=html_content,
        )
