from portfolioapp.models import userdetails
from rest_framework import serializers

class formSerializer(serializers.ModelSerializer):
    class Meta:
        model = userdetails
        fields = '__all__'