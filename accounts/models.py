# from django.contrib.auth.models import AbstractUser
# from django.db import models

# class User(AbstractUser):

#     ROLE_CHOICES = (
#         ('ADMIN','Admin'),
#         ('EMPLOYEE','Employee'),
#         ('MANAGER','Manager'),
#     )

#     role = models.CharField(max_length=50, choices=ROLE_CHOICES)

# from django.contrib.auth.models import AbstractUser
# from django.db import models

# class User(AbstractUser):
#     pass

from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    pass