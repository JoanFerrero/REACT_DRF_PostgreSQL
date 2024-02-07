from rest_framework import serializers
from .models import Trips
from stations.models import Station, Train

class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trips
        fields = ('id', 'exit_station_id', 'arrival_station_id', 'train_id', 'date', 'time')
    
    def trip(context):

        if context['arrival_station'] == context['exit_station']:
            raise serializers.ValidationError('*Station exit == arrival.')
        
        try:
            arrival_station = Station.objects.get(slug=context['arrival_station'])
            exit_station = Station.objects.get(slug=context['exit_station'])
        except:
            raise serializers.ValidationError('*Station not found.')
        
        try:
            train = Train.objects.get(slug=context['train'])
        except:
            raise serializers.ValidationError('*Train not found.')
        
        if train.status == 'no activo':
            raise serializers.ValidationError('*Train not active.')
        
        if arrival_station.status == 'no activo' or exit_station.status == 'no activo':
            raise serializers.ValidationError('*Station not active.')
        
        train.status = 'no activo'
        train.save()

        trips = Trips.objects.create(
            exit_station_id = exit_station.id,
            arrival_station_id = arrival_station.id,
            train_id = train.id,
            date = context['date'],
            time = context['time']
        )
        trips.save()

        return {
            'exit_station': exit_station.name,
            'arrival_station': arrival_station.name,
            'train': train.name,
            'date': context['date'],
            'time': context['time']
        }