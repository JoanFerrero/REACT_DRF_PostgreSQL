from rest_framework import serializers
from .models import Rent
from users.models import User
from stations.models import Chair
from datetime import date

class RentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rent
        fields = ( 'id', 'id_user', 'id_chair')

    def rent(context):
        username = context['username']
        slug_chair = context['slug_chair']

        try:
            user = User.objects.get(username=username)
        except:
            raise serializers.ValidationError('*User not found.')
        
        try:
            chair = Chair.objects.get(slug=slug_chair)
        except:
            raise serializers.ValidationError('*User not found.')
        
        if chair.status == 'no activo':
            raise serializers.ValidationError('*Silla no disponible.')
        
        today = date.today()
        chair.status = 'no activo'
        chair.save()
        
        rent = Rent.objects.create(
            user_id = user.id,
            chair_id = chair.id,
            date = today,
        )

        rent.save()
        return {
            'user': user.username,
            'chair': chair.slug,
            'date': today
        }