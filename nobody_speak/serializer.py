# a serializer for the API. Uses the models
# from nobody_speak.models
from rest_framework import serializers
from nobody_speak.models import Appointment

class AppointmentSerializer(serializers.Serializer):
    person_id = serializers.CharField(max_length=100)