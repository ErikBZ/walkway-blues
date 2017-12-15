from django.urls import path
from . import views

urlpatterns = [
    path("make-appointment", views.make_appointment),
    path("home", views.home),
    # so this works just fine
    path("", views.other)
]