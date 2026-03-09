from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Employee


@login_required
def employee_dashboard(request):
    return render(request, 'employees/dashboard.html')


@login_required
def employee_list(request):
    employees = Employee.objects.all()
    return render(request, 'employees/employee_list.html', {'employees': employees})


@login_required
def employee_detail(request, id):
    employee = Employee.objects.get(id=id)
    return render(request, 'employees/employee_detail.html', {'employee': employee})


@login_required
def add_employee(request):

    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        position = request.POST.get('position')

        Employee.objects.create(
            name=name,
            email=email,
            position=position
        )

        return redirect('employee_list')

    return render(request, 'employees/add_employee.html')