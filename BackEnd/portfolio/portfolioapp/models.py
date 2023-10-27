from django.db import models


class Download(models.Model):
    file=models.FileField()

class userdetails(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    usermessage=models.CharField(max_length=1000)
    file=models.FileField(null=True,blank=True,upload_to='uploads/')
