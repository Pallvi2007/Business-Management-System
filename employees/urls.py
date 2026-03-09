from django.urls import path
from . import views

urlpatterns = [

    path('dashboard/', views.employee_dashboard, name='employee_dashboard'),

    path('employees/', views.employee_list, name='employee_list'),

    path('employee/<int:id>/', views.employee_detail, name='employee_detail'),

    path('add-employee/', views.add_employee, name='add_employee'),

]