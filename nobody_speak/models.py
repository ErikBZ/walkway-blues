from django.db import models
from datetime import date

# Create your models here.
class Appointment(models.Model):
    start_time = models.DateField(default=date.today)
    end_time = models.DateField(default=date.today)
    person_id = models.CharField(max_length=100)
    extra_data = models.TextField(blank=True)
