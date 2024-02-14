from rest_framework import serializers
from .models import IncidenceChair, IncidenceTrain, Notification
from stations.models import Train, Chair
from users.models import User
from users.serializers import UserSerializer

class IncidentsTrainSerializer(serializers.ModelSerializer):
    class Meta:
        model = IncidenceTrain
        fields = ( 'id', 'title', 'status', 'desc', 'user', 'train')

    def getIncidents(context):
        username = context['username']

        try:
            user = User.objects.get(username=username)
        except:
            raise serializers.ValidationError('*User not found.')
        
        try:
            incidents = IncidenceTrain.objects.filter(user=user.id)
        except:
            raise serializers.ValidationError('*User not found.')
        
        objetos_serializados = []
        
        for incident in incidents:
            datos_serializados = {
                'id': incident.id,
                'title': incident.title,
                'status': incident.status,
                'desc': incident.desc,
            }
            objetos_serializados.append(datos_serializados)
        
        return objetos_serializados
        

    def incident(context, incident):

        try:
            train = Train.objects.get(slug=incident['train'])

        except:
            raise serializers.ValidationError('*Train not found.')
        
        try:
            user = User.objects.get(username=context['username'])

        except:
            raise serializers.ValidationError('*User not found.')
        
        title = incident['title']
        desc = incident['desc']
        
        incident = IncidenceTrain.objects.create(
            title = title,
            status = 'pending',
            desc = desc,
            train_id = train.id,
            user_id = user.id
        )
        return {
            'title': title,
            'status': 'pending',
            'desc': desc,
        }

class IncidentsChairSerializer(serializers.ModelSerializer):
    class Meta:
        model = IncidenceChair
        fields = ( 'id', 'title', 'status', 'desc', 'user', 'chair')

    def getIncidents(context):
        username = context['username']

        try:
            user = User.objects.get(username=username)
        except:
            raise serializers.ValidationError('*User not found.')
        
        try:
            incidents = IncidenceTrain.objects.filter(user=user.id)
        except:
            raise serializers.ValidationError('*User not found.')
        
        objetos_serializados = []
        
        for incident in incidents:
            datos_serializados = {
                'id': incident.id,
                'title': incident.title,
                'status': incident.status,
                'desc': incident.desc,
            }
            objetos_serializados.append(datos_serializados)
        
        return objetos_serializados

    def incident(context, incident):

        try:
            chair = Chair.objects.get(slug=incident['chair'])

        except:
            raise serializers.ValidationError('*Train not found.')
        
        try:
            user = User.objects.get(username=context['username'])

        except:
            raise serializers.ValidationError('*User not found.')
        
        title = incident['title']
        desc = incident['desc']
        
        incident = IncidenceTrain.objects.create(
            title = title,
            status = 'pending',
            desc = desc,
            chair_id = chair.id,
            user_id = user.id
        )
        return {
            'title': title,
            'status': 'pending',
            'desc': desc,
        }
    
class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = IncidenceChair
        fields = ( 'id', 'seen', 'desc', 'user')

    def getNotification(context):
        try:
            user = User.objects.get(username=context['username'])
        except:
            raise serializers.ValidationError('*User not found.')
        
        incidents = Notification.objects.all()

        return incidents
    
    def deleteNotification(context):
        try:
            user = User.objects.get(username=context['username'])
        except:
            raise serializers.ValidationError('*User not found.')
        
        try:
            incident = IncidenceChair.objects.get(id=context['slug'])
            incident.delete()
        except:
            raise serializers.ValidationError('*Notification not found.')
        
        return {'data': 'Incident deleted successfully'}
