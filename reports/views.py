from sales.models import Sale
from django.shortcuts import render

def sales_report(request):

    sales = Sale.objects.all()

    total = sum(s.total() for s in sales)

    return render(request,'sales_report.html',{
        'sales':sales,
        'total':total
    })