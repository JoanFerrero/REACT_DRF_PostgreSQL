from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import (IsAuthenticated, IsAdminUser)
from rest_framework.response import Response
from rest_framework.parsers import JSONParser 
from core.permissions import IsAdmin
from .serializers import IncidentsTrainSerializer, IncidentsChairSerializer, NotificationSerializer
from .models import IncidenceTrain, IncidenceChair

class IncidentsTrain(viewsets.GenericViewSet):
    permission_classes = (IsAuthenticated ,)
    
    def getIncidents(self, request):
        username = request.user
        serializer_context = { 'username': username }
        incident_final = IncidentsTrainSerializer.getIncidents(context=serializer_context)
        return Response(incident_final)
    
    def postIncident(seld, request):
        username = request.user
        incident = JSONParser().parse(request)
        serializer_context = { 'username': username }
        incident_final = IncidentsTrainSerializer.incident(context=serializer_context, incident=incident)
        return Response(incident_final)
    
    def deletIncident(seld, request, slug):
        incident = IncidenceTrain.objects.get(id=slug)
        incident.delete()
        return Response({'data': 'Incident deleted successfully'})
    
class IncidentsChair(viewsets.GenericViewSet):
    permission_classes = (IsAuthenticated ,)

    def getIncidents(self, request):
        username = request.user
        serializer_context = { 'username': username }
        incident_final = IncidentsChairSerializer.getIncidents(context=serializer_context)
        return Response(incident_final)
    
    def postIncident(seld, request):
        username = request.user
        incident = JSONParser().parse(request)
        serializer_context = { 'username': username }
        incident_final = IncidentsChairSerializer.incident(context=serializer_context, incident=incident)
        return Response(incident_final)
    
    def deletIncident(seld, request, slug):
        incident = IncidenceChair.objects.get(id=slug)
        incident.delete()
        return Response({'data': 'Incident deleted successfully'})
    
class IncidentsViewAdmin(viewsets.GenericViewSet):
    permission_classes = [IsAdmin]

    def getAllIncidentsTrains(self, request):
        incidents = IncidenceTrain.objects.all()
        incidents_serializer = IncidentsTrainSerializer(incidents, many=True)
        return Response(incidents_serializer.data)
    
    def deleteIncidentTrains(self, request, slug):
        incident = IncidenceTrain.objects.get(id=slug)
        incident.delete()
        return Response({'data': 'Incident deleted successfully'})
    
    def getAllIncidentsChairs(self, request):
        incidents = IncidenceChair.objects.all()
        incidents_serializer = IncidentsChairSerializer(incidents, many=True)
        return Response(incidents_serializer.data)
    
    def deleteIncidentChairs(self, request, slug):
        incident = IncidenceChair.objects.get(id=slug)
        incident.delete()
        return Response({'data': 'Incident deleted successfully'})
    
class NotificationsUser(viewsets.GenericViewSet):
    permission_classes = (IsAuthenticated ,)
    
    def getNotifications(self, request):
        username = request.user
        serializer_context = { 'username': username }
        notifications = NotificationSerializer.getNotification(context=serializer_context)
        notifications_serialize = NotificationSerializer(notifications, many=True)
        return Response(notifications_serialize.data)
    
    def postNotification(self, request):
        return Response('hola')
    
    def deleteNotification(self, request, slug):
        username = request.user
        serializer_context = { 'username': username, 'slug': slug }
        notifications = NotificationSerializer.deleteNotification(context=serializer_context)
        return Response(notifications)
