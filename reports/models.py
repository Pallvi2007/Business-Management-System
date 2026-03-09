from django.db import models

class Report(models.Model):

    title = models.CharField(max_length=200)

    created_at = models.DateTimeField(auto_now_add=True)

    description = models.TextField()

    def __str__(self):
        return self.title