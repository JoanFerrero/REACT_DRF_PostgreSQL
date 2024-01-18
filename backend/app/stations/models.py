from django.db import models

# Create your models here.

class Station(models.Model):
    slug = models.SlugField(max_length=100, unique=True, editable=False)
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=100)
    status = models.CharField(max_length=100)

    def __str__(self):
        return str(self.id)

class Train(models.Model):
    slug = models.SlugField(max_length=100, unique=True, editable=False)
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=100)
    status = models.CharField(max_length=100)

    def __str__(self):
        return str(self.id)

class Chair(models.Model):
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    chair_number = models.IntegerField()

    def __str__(self):
        return str(self.id)