from django.db import models

class Sale(models.Model):

    product_name = models.CharField(max_length=200)
    quantity = models.IntegerField()
    price = models.FloatField()
    sale_date = models.DateField()

    def total(self):
        return self.quantity * self.price
    