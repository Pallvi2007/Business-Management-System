from django.shortcuts import render
from employees.models import Employee
from sales.models import Sale
from django.db.models import Sum

def admin_dashboard(request):

    total_employees = Employee.objects.count()

    total_sales = Sale.objects.count()

    revenue = Sale.objects.aggregate(Sum('price'))

    context = {
        'employees': total_employees,
        'sales': total_sales,
        'revenue': revenue['price__sum']
    }

    return render(request, 'admin_dashboard.html', context)

