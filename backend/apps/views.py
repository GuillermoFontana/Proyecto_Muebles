from django.shortcuts import render
from django.http import JsonResponse
from .models import Producto

# API endpoint para listar productos
def lista_productos(request):
    productos = Producto.objects.all().values()
    return JsonResponse(list(productos), safe=False)

# Dummy API (opcional)
def api_productos(request):
    data = [{"id": 1, "nombre": "Mesa Minimal"}, {"id": 2, "nombre": "Silla Industrial"}]
    return JsonResponse(data, safe=False)

# Catch-all para React (SPA)
def index(request):
    return render(request, 'index.html')