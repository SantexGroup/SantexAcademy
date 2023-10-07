const { Sequelize } = require("sequelize"); // Take the Sequelize Class
require("dotenv").config();

// Se crea la instancia de sequelize con los datos de conexión a la base de datos en el CONSTRUCTOR
const sequelize = new Sequelize(
  // process.env.DB_DATABASE,
  // process.env.DB_USERNAME,
  // process.env.DB_PASSWORD,

  process.env.DB_URL

  //luego se pasa un objeto de configuración con el host y el dialecto
  // {
  //   host: process.env.DB_HOST,
  //   dialect: "mysql",
  // }
    //  process.env.DB_URL_LOCAL
)


sequelize.options.logging = console.log;

const initializeDB = async () => {
  try {
    await sequelize.authenticate(); // Tests connection by trying to authenticate
    console.log("Conection to DB established.");

    // Sync all defined models to DB
    await sequelize.sync({ force: false }); // force: if true, each start deletes DB
    // await sequelize.sync({ alter: true });

    //await sequelize.sync({ alter: true })
    // Create default roles
    const { Roles } = require("../models");
    await Roles.bulkCreateDefaultRoles();
  } catch (err) {
    console.error("Error initializing DB.", err.message);
    throw err;
  }
};

module.exports = { sequelize, initializeDB };
