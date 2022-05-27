from django.db import models

# Create your models here.


class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=200)
    phone = models.CharField(max_length=10)
    address = models.CharField(max_length=200)
    number_of_investments = models.IntegerField()
    investment_details = models.IntegerField()
    def __str__(self):
        return self.first_name+self.last_name

class Listing(models.Model):
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
    year_built = models.CharField(max_length=4)
    description = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    area = models.CharField(max_length=200)
    province = models.CharField(max_length=200)
    postal_code = models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    total_slots = models.IntegerField()
    slots_available = models.IntegerField()
    price_at_listing = models.IntegerField()
    current_market_price = models.IntegerField()
    other = models.CharField(max_length=200)
    equipped_kitchen = models.BooleanField(default=False)
    gym = models.BooleanField(default=False)
    home_theatre = models.BooleanField(default=False)
    laundry = models.BooleanField(default=False)
    bar_counter = models.BooleanField(default=False)
    garage_size = models.IntegerField()
    total_parkings = models.IntegerField()
    front_yard = models.BooleanField(default=False)
    hot_tub = models.BooleanField(default=False)
    pool = models.BooleanField(default=False)
    central_air = models.BooleanField(default=False)
    wheelchair_accessible = models.BooleanField(default=False)
    fireplace = models.BooleanField(default=False)
    smoke_detector = models.BooleanField(default=False)
    elevator = models.BooleanField(default=False)
    image1 = models.FileField(upload_to='logos', default='logos/logo.png')
    image2 = models.FileField(upload_to='logos', default='logos/logo.png')
    image3 = models.FileField(upload_to='logos', default='logos/logo.png')
    image4 = models.FileField(upload_to='logos', default='logos/logo.png')
    image5 = models.FileField(upload_to='logos', default='logos/logo.png')
    image6 = models.FileField(upload_to='logos', default='logos/logo.png')