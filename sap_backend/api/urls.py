from django.urls import path
from . import views

urlpatterns = [
    path('search_resumes', views.search_resumes, name='search_resumes'),
]
