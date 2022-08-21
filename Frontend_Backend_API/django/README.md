


#### Install Python Modules


```pip install -r requirements.txt ```

#### Start Django Project
Project - collection of apps and configs to make a complite website.

Before running the command below we advise getting some context from the following link on [creating a Django project](https://docs.djangoproject.com/en/4.1/intro/tutorial01/#creating-a-project)

```django startproject my_django_site```

> Replace *my-django-site* with your project name.

#### Serve Your Project

```python manage.py runserver 0.0.0.0:8000```

> This will start a server on port 8000 which can be accessed here http://0.0.0.0:8000/ or [localhost:8000](http://0.0.0.0:8000/)

> Should you get the following error:
>> Invalid HTTP_HOST header: '0.0.0.0:8000'. You may need to add '0.0.0.0' to ALLOWED_HOSTS.


> add '0.0.0.0' to ALLOWED_HOSTS in your settings.py

#### Start Django Apps
Apps - package of code that can be found in multiple projects

```python manage.py startapp accounts```
