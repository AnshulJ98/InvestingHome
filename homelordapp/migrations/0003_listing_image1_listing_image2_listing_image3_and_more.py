# Generated by Django 4.0.3 on 2022-05-27 01:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homelordapp', '0002_listing'),
    ]

    operations = [
        migrations.AddField(
            model_name='listing',
            name='image1',
            field=models.FileField(default='logos/logo.png', upload_to='logos'),
        ),
        migrations.AddField(
            model_name='listing',
            name='image2',
            field=models.FileField(default='logos/logo.png', upload_to='logos'),
        ),
        migrations.AddField(
            model_name='listing',
            name='image3',
            field=models.FileField(default='logos/logo.png', upload_to='logos'),
        ),
        migrations.AddField(
            model_name='listing',
            name='image4',
            field=models.FileField(default='logos/logo.png', upload_to='logos'),
        ),
        migrations.AddField(
            model_name='listing',
            name='image5',
            field=models.FileField(default='logos/logo.png', upload_to='logos'),
        ),
        migrations.AddField(
            model_name='listing',
            name='image6',
            field=models.FileField(default='logos/logo.png', upload_to='logos'),
        ),
    ]
