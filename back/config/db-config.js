const { Sequelize } = require("sequelize"); // Take the Sequelize Class
require("dotenv").config();

// Se importa el módulo sequelize
const { Sequelize } = require('sequelize');

// Se crea la instancia de sequelize con los datos de conexión a la base de datos en el CONSTRUCTOR
// Se puede usar una sola variable de entorno DB_URL que contenga todos los datos necesarios
// O se pueden usar variables separadas para el nombre de la base de datos, el usuario, la contraseña y el host
// El dialecto se puede especificar como una opción o se puede inferir de la URL
const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: "mysql",
});

// Se prueba la conexión con el método authenticate
// Se usa una función asíncrona para esperar la promesa
// Se usa try-catch para manejar los posibles errores
(async () => {
  try {
    await sequelize.authenticate();
    console.log('La conexión se ha establecido correctamente.');
  } catch (error) {
    console.error('No se ha podido conectar a la base de datos:', error);
  }
})();


const initializeDB = async () => {
  try {
    await sequelize.authenticate(); // Tests connection by trying to authenticate
    console.log("Conection to DB established.");

    // Sync all defined models to DB
    await sequelize.sync({ force: false }); // force: if true, each start deletes DB

    // Create default roles
    const { Roles } = require("../models");
    await Roles.bulkCreateDefaultRoles();
  } catch (err) {
    console.error("Error initializing DB.", err.message);
    throw err;
  }
};

module.exports = { sequelize, initializeDB };
