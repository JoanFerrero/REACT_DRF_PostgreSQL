from rest_framework import serializers
from .models import Station
from .models import Train
from .models import Chair
from random import randint

class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Station
        fields = ['id', 'slug', 'name', 'image', 'status']

    def to_representation(self, instance):
        return {
            "id": instance.id,
            "slug": instance.slug,
            "name": instance.name,
            "image": instance.image,
            "status": instance.status,
        }
    
class TrainSerializer(serializers.ModelSerializer):
    class Meta:
        model = Train
        fields = ['id', 'slug', 'name', 'image', 'status']

    def to_representation(self, instance):
        return {
            "id": instance.id,
            "slug": instance.slug,
            "name": instance.name,
            "image": instance.image,
            "status": instance.status,
        }
    
class ChairSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chair
        fields = ['id', 'name', 'image', 'status', 'type', 'chair_number']

    def to_representation(self, instance):
        return {
            "id": instance.id,
            "name": instance.name,
            "image": instance.image,
            "status": instance.status,
            "type": instance.type,
            "chair_number": instance.chair_number,
        }