#!/bin/bash

# Directorios de origen y destino
FRONTEND_BUILD_DIR="./frontend/dist"
DJANGO_STATIC_DIR="./backend/static/assets"
DJANGO_TEMPLATES_DIR="./backend/templates"

# Elimina los archivos antiguos de assets y templates (opcional)
rm -rf "$DJANGO_STATIC_DIR/*"
rm -rf "$DJANGO_TEMPLATES_DIR/*"

# Copia los nuevos archivos del build
cp -r "$FRONTEND_BUILD_DIR"/* "$DJANGO_STATIC_DIR/"
cp "$FRONTEND_BUILD_DIR/index.html" "$DJANGO_TEMPLATES_DIR/"

echo "¡Build copiado con éxito!"