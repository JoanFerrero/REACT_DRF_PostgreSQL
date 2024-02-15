from django.urls import path
from .views import IncidentsTrain, IncidentsChair, IncidentsViewAdmin, NotificationsUser

urlpatterns = [
    # INCIDENTS TRAINS
    path('incidenttget', IncidentsTrain.as_view({'get': 'getIncidents'})),
    path('incidentt', IncidentsTrain.as_view({'post': 'postIncident'})),
    path('incidenttdelet/<str:slug>', IncidentsTrain.as_view({'delete': 'deletIncident'})),

    # INCIDENTS CHAIRS
    path('incidentscget', IncidentsChair.as_view({'get': 'getIncidents'})),
    path('incidentsc', IncidentsChair.as_view({'post': 'postIncident'})),
    path('incidentsc/<str:slug>', IncidentsChair.as_view({'delete': 'deletIncident'})),

    # VIEW INCIDENTS ADMIN TRAINS
    path('alltrainincidents', IncidentsViewAdmin.as_view({'get': 'getAllIncidentsTrains'})),
    path('deletetrainincidents', IncidentsViewAdmin.as_view({'delete': 'deleteIncidentsTrains'})),

    # VIEW INCIDENTS ADMIN CHAIRS
    path('allchairincidents', IncidentsViewAdmin.as_view({'get': 'getAllIncidentsChairs'})),
    path('deletechairincidents', IncidentsViewAdmin.as_view({'delete': 'deleteIncidentsChairs'})),

    # NOTIDICATION
    path('notifications', NotificationsUser.as_view({'get': 'getNotifications'})),
    path('notifications', NotificationsUser.as_view({'post': 'postNotification'})),
    path('notifications/<str:slug>', NotificationsUser.as_view({'delete': 'deleteNotification'})),
]