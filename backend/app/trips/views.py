from django.shortcuts import render
from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser)
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.parsers import JSONParser 
from .serializers import TripSerializer
from .models import Trips

# Create your views here.

class TripView(viewsets.GenericViewSet):
    # permission_classes = (IsAuthenticated ,)

    def createTrip(self, request):
        trip = JSONParser().parse(request)
        trip_final = TripSerializer.trip(context=trip)
        return Response(trip_final)
    
    def viewTrip(self, request):
        trips = Trips.objects.all()
        trips_serializer = TripSerializer(trips, many=True)
        return Response(trips_serializer.data)
    
    def viewOneTrip(self, request):
        return 'hola'

