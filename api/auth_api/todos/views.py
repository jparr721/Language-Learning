from django.shortcuts import render
from todos.models import Todo
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse

from todos.serializers import TodoSerializer

# Create your views here.

class Todolist(generics.ListCreateAPIView):
	queryset = todo.objects.all()
	serializer_class = TodoSerializer

	def perform_create(self, serializer):
		serializer.save(user=self.request.user

class TodoDetail(generics.RetreieveUpdateDetroyAPIView):
	serializer_class = TodoSerializer

	def get_query(self):
		return Todo.objects.all().filter(user=self.request.user)
