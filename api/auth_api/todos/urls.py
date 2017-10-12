from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from todos import views

urlpatterns = [
	url(r'^todos/$', views.TodoList.as_view(), name='todo-list'),
	url(r'^todos/(?P<ok>[0-9]+)/$', views.renderTodoDetail.as_view(), name='todo-detail'),
    ]
