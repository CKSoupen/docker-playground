# BASE IMAGE
FROM python:3.9-alpine

# WORKDIR IN IMAGE
WORKDIR /app

# COPY OVER REQUIREMENTS TO CODE FOLDER IN IMAGE
COPY requirements.txt /app/requirements.txt

# RUN THE INSTALL COMMAND TO INSTALL PYTHON PACKAGES
RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

# COPY OVER SOURCE CODE TO FOLDER IN IMAGE
COPY . /app/api