# Generated by Django 5.0.1 on 2024-01-17 17:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stations', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Chair',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.CharField(editable=False, max_length=100, unique=True)),
                ('name', models.CharField(max_length=100)),
                ('image', models.CharField(max_length=100)),
                ('status', models.CharField(max_length=100)),
                ('type', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Station',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.CharField(editable=False, max_length=100, unique=True)),
                ('name', models.CharField(max_length=100)),
                ('image', models.CharField(max_length=100)),
                ('status', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Train',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.CharField(editable=False, max_length=100, unique=True)),
                ('name', models.CharField(max_length=100)),
                ('image', models.CharField(max_length=100)),
                ('status', models.CharField(max_length=100)),
            ],
        ),
        migrations.DeleteModel(
            name='Stations',
        ),
    ]