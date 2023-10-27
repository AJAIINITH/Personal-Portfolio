from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from portfolioapp.models import Download,userdetails
from django.http.response import HttpResponseBadRequest,FileResponse,JsonResponse
from portfolioapp.serializers import formSerializer
from rest_framework import generics
from django.core.mail import send_mail



class Fileupload(generics.ListCreateAPIView):
    queryset = userdetails.objects.all()
    serializer_class = formSerializer


@csrf_exempt
def send_email_view(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        usermessage = request.POST.get('usermessage')
        subject = "{} has contacted you through your portfolio form".format(name)
        message = "{} you can contact me through my mail id {}".format(usermessage,email) 
        recipient_email = ['jobsforinith@gmail.com']
        send_mail(subject, message, from_email=email,recipient_list=recipient_email,fail_silently=False)  
        return JsonResponse({'message': 'Email sent successfully'})
    else:
        return JsonResponse({'message': 'Invalid request method'}, status=400) 
      


@csrf_exempt
def download_file(request, file_id):
    try:
        file_id = int(file_id)
        uploaded_file = get_object_or_404(Download, pk=file_id)
        
        response = FileResponse(uploaded_file.file, as_attachment=True)
        response['Content-Disposition'] = f'attachment; filename="{uploaded_file.file.name}"'
        return response
    except ValueError:
        return HttpResponseBadRequest("Invalid file ID")