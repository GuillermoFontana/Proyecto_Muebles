from django.urls import path
from . import views
from .views import index
from .views import lista_productos


urlpatterns = [
    path('', index, name='index'),  # 👈 esto renderiza React desde /
    path("productos/", lista_productos),  # Ruta para la lista de productos
    path('', views.index),                   # Ruta raíz
    path('<path:resource>', views.index),     # Cualquier otra ruta va a React
]
