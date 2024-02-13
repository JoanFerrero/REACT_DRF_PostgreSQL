from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import (IsAuthenticated, IsAdminUser)
from rest_framework.response import Response

class IncidentsTrain(viewsets.GenericViewSet):
    permission_classes = (IsAuthenticated ,)
    
    def getIncidents(self, request):
        return Response('rent')
    
    def postIncident(seld, request):
        return Response('resasd')
    
class IncidentsChair(viewsets.GenericViewSet):
    permission_classes = (IsAuthenticated ,)

    def getIncidents(self, request):
        return Response('rent')
    
    def postIncident(seld, request):
        return Response('resasd')
    
class IncidentsViewAdmin(viewsets.GenericViewSet):

    def getAllIncidentsTrains(self, request):
        return Response('rent')
    
    def updateIncidentsTrains(self, request):
        return Response('rent')
    
    def deleteIncidentsTrains(self, request):
        return Response('rent')
    
    def getAllIncidentsChairs(self, request):
        return Response('rent')
    
    def updateIncidentsChairs(self, request):
        return Response('rent')
    
    def deleteIncidentsChairs(self, request):
        return Response('rent')
    
class NotificationsUser(viewsets.GenericViewSet):
    permission_classes = (IsAuthenticated ,)
    
    def getNotifications(self, request):
        return Response('rent')
    
    def postIncident(seld, request):
        return Response('resasd')
