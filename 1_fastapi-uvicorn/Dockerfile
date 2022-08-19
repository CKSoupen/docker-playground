# BASE IMAGE
FROM python:3.9

# WORKDIR IN IMAGE
WORKDIR /src

# COPY OVER REQUIREMENTS TO CODE FOLDER IN IMAGE
COPY ./requirements.txt /code/requirements.txt

# RUN THE INSTALL COMMAND TO INSTALL PYTHON PACKAGES
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# COPY OVER SOURCE CODE TO FOLDER IN IMAGE
COPY ./app /src/app
