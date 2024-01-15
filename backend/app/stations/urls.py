from django.urls import path
from .views import StationView

urlpatterns = [
    # Stations
    path('stations', StationView.as_view({'get': 'getStations'})),
    path('stations/<str:slug>', StationView.as_view({'get': 'getOneStation'})),
    path('stations', StationView.as_view({'post': 'post'})),
    path('stations/<str:slug>', StationView.as_view({'put': 'put'})),
    path('stations/<str:slug>', StationView.as_view({'delete': 'delete'})),

]