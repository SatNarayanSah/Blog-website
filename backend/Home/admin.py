from django.contrib import admin
from .models import *
# Register your models here.
categories = ["Technology", "Trends","sports", "Management", "Travel", "Startups", "News", "Business"]
for cat in categories:
    Category.objects.get_or_create(name=cat)


admin.site.register(Blog)


from django.contrib import admin
from .models import Blog, Category

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "created_at")
    search_fields = ("name",)

