
# BOILERPLATE EJEMPLO PARA JESUS MARIA

Esta es una API de ejemplo desarrollada en Node + Express + Sequelize.

## INSTALACION

### Node Js

`$ sudo apt-get install nodejs`

### BASE DE DATOS

Configurar el archivo .env con los parametros de mysql local o levantando un container de mysql con el docker-compose

####Para crear y popular la base de datos:
```
$ ./node_modules/.bin/sequelize db:create
$ ./node_modules/.bin/sequelize db:migrate
```
'
```
$ ./node_modules/.bin/sequelize db:seed:all
```
Para eliminar datos iniciales
```
$ ./node_modules/.bin/sequelize db:seed:undo:all`
```
## DEPLOY DEL SERVIDOR

`$ npm start`
