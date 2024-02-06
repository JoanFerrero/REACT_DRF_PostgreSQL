from django.urls import path
from .views import TripView

urlpatterns = [

    # RENT
    path('trip', TripView.as_view({'post': 'createTrip'})),
    path('trips', TripView.as_view({'get': 'viewTrip'})),
  
]