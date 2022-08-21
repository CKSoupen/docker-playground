# docker-playground 🐳

This repo contains all my docker applications. 

## Before getting started!
  Are you familiar with [docker & docker compose](https://www.docker.com/)? 

To get started, download Docker desktop and follow the [README.md](https://github.com/CKSoupen/docker-playground/edit/master/getting_started_with_docker/README.md) in *getting_started_with_docker*.

Or if you have a better understanding of docker and just want to deploy a stack quickly...

## Explore Multiple Docker Images & Apps
Just copy the app you want
 build with ```docker-compose build``` & 
  deploy with ```docker-compose up```

### Frontend/Backend/API Images

- FastApi
- React App
- Vue App
- Django
- Express
- React[TypeScript]

### Databases

- Postgres (rel)
- MySQL (rel)
- MongoDB (non-rel)
- Cockroach DB (non-rel)
- Dynamo DB (non-rel)


> As a standard all /app directory will be the work directory (WORKDIR) 

> As another standard, the respective application/framework will be copied over for example /api will be copied into /app.

## The Fun Doesnt End Here!
**Get creative and network your images into full stacks using services in dockercompose.yml to create docker apps that suite your development needs.**

### Prebuilt Apps/Stacks

- Django (web) + Postgres (db (*rel*))
- Express (api) + React (f-end) + MongoDB (db (*non-rel*))
- FastAPI (api) + Vue (f-end) + Postgres (db (*rel*))

>(web) = frontend + backend,\
>(f-end) = frontend,\
>(b-end) = backend,\
>(api) = Application Programming Interface\
>(db) = database 