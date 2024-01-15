from django.http import JsonResponse
from django.shortcuts import render
from .serializers import StationSerializer
from rest_framework.response import Response
from rest_framework.parsers import JSONParser 
from rest_framework import viewsets

from .models import Stations
from rest_framework.permissions import (AllowAny, IsAuthenticated)

class StationView(viewsets.GenericViewSet):

    def getStations(self, request):
        stations = Stations.objects.all()
        stations_serializer = StationSerializer(stations, many=True)
        return Response(stations_serializer.data)
    
    def getOneStation(self, request, slug):
        station = Stations.objects.get(id=slug)
        station_serializer = StationSerializer(station)
        return Response(station_serializer.data)
    
    def post(self, request):
        #return JsonResponse({'message': '{request}'})
        station = JSONParser().parse(request)
        serializer = StationSerializer(data=station)
        if (serializer.is_valid(raise_exception=True)):
            serializer.save()
        return Response(serializer.data)
    
    def put(self, request, slug):
        station = Stations.objects.get(id=slug)
        data = JSONParser().parse(request)
        serializer = StationSerializer(instance=station, data=data, partial=True)
        if (serializer.is_valid(raise_exception=True)):
            serializer.save()
        return Response(serializer.data)

    def delete(self, request, slug):
        station = Stations.objects.get(id=slug)
        station.delete()
        return Response({'data': 'Station deleted successfully'})
    