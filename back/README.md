
# Proyecto NodeJs + Express Academy 

Este proyecto en [NodeJs](https://nodejs.org/en/), [Express](https://expressjs.com/) y [Sequelize](https://sequelize.org/) esta pensado para empezar como base para los desarrollos del curso.

## Levantar proyecto

Agregar un archivo nuevo dentro de la carpeta back con el nombre  ".env" y copiar el contenido del .env.example. Luego modificar estas constantes dependiendo de su configuracion local. Recordar que, como este proyecto ya se conecta a una base de datos existente, esta debe estar creada y en el ".env" los siguientes datos hacen referencia a la conexion con la base de datos:

* DB_HOST
* DB_PORT
* DB_USERNAME
* DB_PASSWORD
* DB_DATABASE
* DB_DIALECT 

Por ultimo para levantar el proyecto, se tienen que correr los siguientes comandos:

```bash
  npm run build
  npx start
```





## Comandos de Sequelize

#### Para crear y popular la base de datos:
```
$ ./node_modules/.bin/sequelize db:create
$ ./node_modules/.bin/sequelize db:migrate
$ ./node_modules/.bin/sequelize db:seed:all
```
---------

## Como crear un nuevo model + tabla
Documentacion: https://sequelize.org/master/manual/migrations.html

Ejecutar este comando:

### Paso 1:

```
npx sequelize-cli model:generate --name [model name] --attributes [attributes]
```

Reemplazando:
- [model name] por el nombre de que quieran que tenga el Model. Ej: Users
- [attributes] por un listado de atributos separados por coma que va a tener el Model. Ej: firstName:string,lastName:number

Luego de ejecutar ese comando, se van a generar 2 archivos automáticamente:
- [model name].js dentro del a carpeta models (deberian renombrarla a .model.js para mantener consistencia)
- [tiempstamp]-create-[model name].js dentro del a carpeta migrations. Ej: 202303271235-create-users.js

Si necesitan crear relaciones entre tablas o agregar atributos mas complejos que string/number, recomiendo que vayan al 202303271235-create-users.js y hagan los cambios en ese archivo como si fuera el Model.

### Paso 2:
Correr el siguiente comando para que se cree la tabla usando los archivos anteriores.

```
./node_modules/.bin/sequelize db:migrate
```
Listo!

---------

### Para eliminar datos iniciales
```
$ ./node_modules/.bin/sequelize db:seed:undo:all`
```