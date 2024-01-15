from rest_framework import serializers
from .models import Stations
from random import randint

class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stations
        fields = ['id', 'slug', 'name', 'image', 'status']

    def to_representation(self, instance):
        return {
            "id": instance.id,
            "slug": instance.slug,
            "name": instance.name,
            "image": instance.image,
            "status": instance.status,
        }