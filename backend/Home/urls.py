from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from Home.views import BlogViewSet
router = routers.DefaultRouter()
router.register(r'users',BlogViewSet,basename='blog')

urlpatterns = [
    path('admin/',admin.site.urls),
    path('api/',include(router.urls)),
]
