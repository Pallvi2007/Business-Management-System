from django.db import models

class Sale(models.Model):

    product = models.CharField(max_length=200)
    quantity = models.IntegerField()
    price = models.FloatField()
    date = models.DateField()

    def total(self):
        return self.quantity * self.price