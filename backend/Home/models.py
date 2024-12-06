from django.db import models

# Create your models here.


class Blog(models.Model):
    title = models.CharField(max_length=200)
    desciption = models.TextField()
    author = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    data = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='blog_images')

    def __str__(self):
        return self.title