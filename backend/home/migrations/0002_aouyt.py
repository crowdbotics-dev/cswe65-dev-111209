# Generated by Django 2.2.28 on 2023-08-24 16:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Aouyt',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vfbfn', models.BigIntegerField()),
                ('itiot', models.BigIntegerField()),
            ],
        ),
    ]
