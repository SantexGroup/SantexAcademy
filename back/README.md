
# BOILERPLATE EJEMPLO PARA JESUS MARIA

Esta es una API de ejemplo desarrollada en Node + Express + Sequelize.

## INSTALACION

### Node Js
`$ sudo apt-get install nodejs`
---------
### BASE DE DATOS

Configurar el archivo .env con los parametros de mysql local o levantando un container de mysql con el docker-compose

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
- [tiempstamp]-create-[model name].js dentro del a carpeta migrations. Ej: 202110271235-create-users.js

Si necesitan crear relaciones entre tablas o agregar atributos mas complejos que string/number, recomiendo que vayan al 202110271235-create-users.js y hagan los cambios en ese archivo como si fuera el Model.

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
## DEPLOY DEL SERVIDOR

`$ npm start`
