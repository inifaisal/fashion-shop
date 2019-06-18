# Fashion Shop

This project build with [Reactjs](https://reactjs.org) & [Prisma](https://prisma.io) Graphql Server

## How Run this project

### Server

you must have docker & docker compose installed on your machine and also you must have to install [prisma](https://prisma.io) globally

```
npm install -g prisma
```

run docker compose on `server` project/package

```
docker-compose up -d
```

after that run

```
prisma deploy
```

to deploy server app, and run

```
prisma seed
```

to add initial data to database.

run server app

```
yarn start
```

### client & Dashboard

to run `client` & `dashboard` project/packege is straightforward, just run

```
yarn start
```

on every project.

that's it, visit `http://localhost:3000` to see client app & `http://localhost:3001` to see dashboard app.

Thanks.
