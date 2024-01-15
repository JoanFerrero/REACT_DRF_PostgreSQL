from django.db import models

# Create your models here.

class Stations(models.Model):
    #slug = models.SlugField(max_length=100, unique=True, editable=False)
    slug = models.CharField(max_length=100, unique=True, editable=False)
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
