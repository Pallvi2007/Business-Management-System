from django.db import models
from django.conf import settings

class Employee(models.Model):

    name = models.CharField(max_length=100)

    email = models.EmailField()

    position = models.CharField(max_length=100)

    salary = models.DecimalField(max_digits=10, decimal_places=2)

    hire_date = models.DateField()

    def __str__(self):
        return self.name