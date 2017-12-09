from django.urls import path
from . import views

urlpatterns = [
    path("home", views.home),
    # so this works just fine
    path("", views.other)
]