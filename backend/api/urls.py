from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet
from .views import VolunteerDetail, SchoolDetail

router = DefaultRouter()
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/volunteers/<int:pk>/', VolunteerDetail.as_view(), name='volunteer-detail'),
    path('api/schools/<int:pk>/', SchoolDetail.as_view(), name='school-detail'),
]
