from django.urls import path
from portfolioapp import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('download/<int:file_id>/', views.download_file),
    path('',views.Fileupload.as_view()),
    path('email',views.send_email_view),
]



if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)