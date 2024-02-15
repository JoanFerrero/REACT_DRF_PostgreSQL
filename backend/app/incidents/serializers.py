from rest_framework import serializers
from .models import IncidenceChair, IncidenceTrain, Notification
from stations.models import Train, Chair
from users.models import User
from users.serializers import UserSerializer

class IncidentsTrainSerializer(serializers.ModelSerializer):
    class Meta:
        model = IncidenceTrain
        fields = ( 'id', 'title', 'status', 'desc', 'user', 'train')

    def to_incidence_train(instance):
        return ({
            "id": instance.id,
            "title": instance.title,
            "status": instance.status,
            "desc": instance.desc,
            "user": instance.user_id,
            "train": instance.train_id
        })

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
    
    def updateStatus(context, id):
        new_status = context['status']
        incidence = IncidenceTrain.objects.get(id=id)

        if incidence is None:
            raise serializers.ValidationError('Incident not found')

        if (incidence.status == 'resolved'):    
            raise serializers.ValidationError('The incidence is already resolved')

        if (new_status == 'pending'):
            incidence.status = 'pending'
        elif (new_status == 'in_progress'):
            incidence.status = 'in_progress'
            Notification.objects.create(desc="Your slot incidence: " + str(incidence.title) + ", is in progress.", user_id=incidence.user_id, seen=False)
        elif (new_status == 'resolved'):
            incidence.status = 'resolved'
            Notification.objects.create(desc="Your slot incidence: " + str(incidence.title) + ", is resolved. Thank you!", user_id=incidence.user_id, seen=False)
        else:
            raise serializers.ValidationError('The incidence is closed')

        incidence.save()
        return incidence


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
        
        notifications = Notification.objects.filter(user_id=user.id)

        objetos_serializados = []
        
        for notification in notifications:
            datos_serializados = {
                'id': notification.id,
                'seen': notification.seen,
                'desc': notification.desc,
                'user': notification.user_id
            }
            objetos_serializados.append(datos_serializados)
        
        return objetos_serializados
    
    def deleteNotification(context):
        try:
            user = User.objects.get(username=context['username'])
        except:
            raise serializers.ValidationError('*User not found.')
        
        try:
            incident = IncidenceChair.objects.get(id=context['slug'], user_id=user.id)
            incident.delete()
        except:
            raise serializers.ValidationError('*Notification not found.')
        
        return {'data': 'Incident deleted successfully'}
