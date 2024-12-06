from django.shortcuts import render
from .models import *
from rest_framework import viewsets
from .serializers import *
# Create your views here.
class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class  = BlogSerializer