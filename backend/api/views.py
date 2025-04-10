from rest_framework import viewsets, generics
from .models import Task, Volunteer, School
from .serializers import TaskSerializer, VolunteerSerializer, SchoolSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class VolunteerDetail(generics.RetrieveAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer

class SchoolDetail(generics.RetrieveAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer
