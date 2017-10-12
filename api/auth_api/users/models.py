from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser): 
# This lets us use the Django defined user model but defining our own lets us change it later
	pass

