from django.urls import path
from .views import IncidentsTrain, IncidentsChair, IncidentsViewAdmin, NotificationsUser

urlpatterns = [
    # INCIDENTS TRAINS
    path('incidentTrain', IncidentsTrain.as_view({'get': 'getIncidents'})),
    path('incidentTrain', IncidentsTrain.as_view({'post': 'postIncident'})),

    # INCIDENTS CHAIRS
    path('incidentsChair', IncidentsChair.as_view({'get': 'getIncidents'})),
    path('incidentsChair', IncidentsChair.as_view({'post': 'postIncident'})),

    # VIEW INCIDENTS ADMIN TRAINS
    path('alltrainincidents', IncidentsViewAdmin.as_view({'get': 'getAllIncidentsTrains'})),
    path('updatetrainincidents', IncidentsViewAdmin.as_view({'put': 'updateIncidentsTrains'})),
    path('deletetrainincidents', IncidentsViewAdmin.as_view({'delete': 'deleteIncidentsTrains'})),

    # VIEW INCIDENTS ADMIN CHAIRS
    path('allchairincidents', IncidentsViewAdmin.as_view({'get': 'getAllIncidentsChairs'})),
    path('updatechairincidents', IncidentsViewAdmin.as_view({'put': 'updateIncidentsChairs'})),
    path('deletechairincidents', IncidentsViewAdmin.as_view({'delete': 'deleteIncidentsChairs'})),

    # NOTIDICATION
    path('notifivations', NotificationsUser.as_view({'get': 'getNotifications'})),
    path('notifivations', NotificationsUser.as_view({'post': 'postIncident'})),
]