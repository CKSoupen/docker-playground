# Express + TS

## Getting Started
Simply run
```docker-compose up```, watch the magic happen, and before you know it you are running an express app in development mode on [port 8081](http://localhost:8081) using a docker container.


## File Structure of Express API
Below is the file structure for the applciation. The app is built with TypeScript and compiled down to JavaScript for production builds only. 

**TODO: production build to be added!**
```
express
|   docker-compose.yml
│   README.md
│   
└───api
│   │   file011.txt
│   │   file012.txt
│   │
│   └───build
│       │   index.js
│       │   ...
│   └───node_modules
│       │   ...
│   └───src
│       │   index.ts
│       │   ...
│   │   .dockerignore
│   │   Dockerfile
|   |   package-lock.json
|   |   package.json
|   |   tsconfig.json
```