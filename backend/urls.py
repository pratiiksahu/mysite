from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path('increment-count/', views.increment_count, name='increment_count'),
]