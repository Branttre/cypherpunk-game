from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
        firstname = models.CharField(max_length=250, null=False, default="unknown")
        lastname = models.CharField(max_length=250, null=False, default="unknown")
        username = models.CharField(max_length=250, null=False, default="unknown")
        # password = models.CharField(max_length=250, null=False, default="unknown")
        level = models.IntegerField(null=False, default=0)
        email = models.EmailField(blank = False, null = False, unique = True)
        profile_image = models.TextField(default='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6238c0f-106f-4e4c-bf1c-00360465ae97/dea5apw-470c6b8a-1e26-49f9-9a4a-09d35e610734.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2MjM4YzBmLTEwNmYtNGU0Yy1iZjFjLTAwMzYwNDY1YWU5N1wvZGVhNWFwdy00NzBjNmI4YS0xZTI2LTQ5ZjktOWE0YS0wOWQzNWU2MTA3MzQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.amOe7SO7CiBRu77meLkUaki_JeQ0Nz5XlZL_BWpTGuU')
        USERNAME_FIELD = "email"
        REQUIRED_FIELDS = []

        def __str__(self):
                return f"{self.firstname} | {self.email}"