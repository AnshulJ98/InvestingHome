from django.shortcuts import render
from django.views import generic
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic import View

# Create your views here.
class IndexView(generic.ListView):
    template_name = 'index.html'
    
    def get_queryset(self):
        print(self)
        return {'x':1}