from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.parsers import JSONParser 
from .serializers import UserSerializar, ProfileSerializer


# Create your views here.

class UserView(viewsets.GenericViewSet):

    def register(self, request):
        user = JSONParser().parse(request)

        serializer = UserSerializar.register(user)

        ProfileSerializer.create(context=serializer['user'])

        return Response(serializer)
    
    def login(self, request):
        user = JSONParser().parse(request)

        serializer = UserSerializar.login(user)

        return Response(serializer)