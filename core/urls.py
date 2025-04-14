from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from apps.views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('apps.urls')),  # por ejemplo, si tus endpoints están en /api/
    
    # Fallback para cualquier otra ruta no capturada
    re_path(r'^.*$', index),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)