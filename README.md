
# Admin-TODOS

[descripcion de la aplicaion]


## Developer

**Pasos para levantar nuestro app en desarrolloa**

1.- Levantar Base de datos

```cmd
docker compose up -d
```

2.- Renombrar el `.env.template` a `.env`

3.- ingresar la ubicacion de la base de datos en la variable de entorno `DATABASE_URL` en el archivo .env

4.- (optional) crear data de pruebas corriendo la [url](localhost:3001/api/seed) de semilla : `localhost:3001/api/seed` donde *localhost:3001* es la ubicacion del servidor en local...

## prod

## Stage


### prisma commands


```cmd
npx prisma init

npx prisma migrate dev

npx prista generate
```



**Update the database schema with migrations**

*Usage*
```
  $ prisma migrate [command] [options]
```

**Commands for development**

* dev   Create a migration from changes in Prisma schema, apply it to the database
               trigger generators (e.g. Prisma Client)
* reset   Reset your database and apply all migrations, all data will be lost

**Commands for production/staging**

* deploy   Apply pending migrations to the database
* status   Check the status of your database migrations
* resolve   Resolve issues with database migrations, i.e. baseline, failed migration, hotfix

*Command for any stage*

* diff   Compare the database schema from two arbitrary sources

*Options*

* -h, --help   Display this help message
* --schema   Custom path to your Prisma schema

*Examples*

Create a migration from changes in Prisma schema, apply it to the database, trigger generators (e.g. Prisma Client)
```
 $ prisma migrate dev
```
Reset your database and apply all migrations
```$ prisma migrate reset```

  Apply pending migrations to the database in production/staging 
  ```
  $ prisma migrate deploy
  ```

  Check the status of migrations in the production/staging database
  ```
  $ prisma migrate status
  ```

  Specify a schema
  ```
  $ prisma migrate status --schema=./schema.prisma
  ```

  Compare the database schema from two databases and render the diff as a SQL script
```
  $ prisma migrate diff \
    --from-url "$DATABASE_URL" \
    --to-url "postgresql://login:password@localhost:5432/db" \
    --script
```
