from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser)
from users.serializers import UserSerializer
from .serializers import RentSerializer
from stations.models import Chair
from rest_framework.response import Response

# Create your views here.

class RentView(viewsets.GenericViewSet):
    permission_classes = (IsAuthenticated ,)

    def rent(self, request, slug):
        username = request.user
        serializer_context = { 'username': username, 'slug_chair': slug }
        serializer = RentSerializer.rent(context=serializer_context)
        return Response(serializer)