Para aplicar actualizaciones (SOLO si son necesarias) busquelas en la carpeta actualizaciones

El numero de los nombres de los archivos de migraciones, indica el orden en que se ejecutaran en caso de hacer una migracion general sin parametros. Despues del numero siguen el nombre que explica que migracion realiza el archivo. Se migraran todos los archivos de la carpeta migraciones al ejecutar en terminal parados en la carpeta back: 

db:migrate (en mysql>DELETE FROM `SequelizeMeta`;)
o 
./node_modules/.bin/sequelize db:migrate

Para crear un archivo migraciones a mano por ejempo: para agregar un campo como ejemplo puede copiar el archivo: 20230830216201-add-verificationCode.js (que agrega un campo a la tabla users) y pegarlo en un nuevo archivo .js Luego copie el numero de la tabla correspondiente y cambie los ultimos digitos para que sea un numero mayor y ponga un nombre descriptivo.

Para realizar una migracion especifica ejecute:

./node_modules/.bin/sequelize db:migrate --name nombre-del-archivo-de-migracion.js

(ejemplo: ./node_modules/.bin/sequelize db:migrate --name 20230830216201-add-verificationCode.js esta migracion agrega un campo a la tabla users)

Si tiene problemas con las migraciones y su base de datos no tiene aun datos relevantes puede optar por eliminar la tabla y luego migrarla de nuevo o eliminar la base de datos y creala de nuevo. Para ello debe ingresar a mysql desde la terminal:
>mysql -u suUsuario -p
ingrese su contraseña:****
ahora dentro de 
mysql>DROP TABLE users(o el nombre de la tabla a eliminar);
luego puede crear la tabla nuevamente con 
mysql>CREATE TABLA users(o la tabla eliminada);
sale de mysql>exit 
y desde terminal parado en la carpeta back corre la migracion especifica de create-users

lo mismo si elimina la base de datos con DROP DATABASE "nombreDeLaBase"; y luego CREATE DATABASE "nombreDeLaBase";
finalmente desde terminal corre db:migrate para crear todas las tablas o las migraciones especificas que desee.