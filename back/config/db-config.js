const { Sequelize } = require("sequelize"); // Take the Sequelize Class
require("dotenv").config();


const url = require('url');
const dbUrl = process.env.DB_URL;
const dbConfig = url.parse(dbUrl);
const sequelize = new Sequelize(dbConfig.path.substring(1), dbConfig.auth.split(':')[0], dbConfig.auth.split(':')[1], {
  host: dbConfig.host.split(':')[0],
  port: dbConfig.host.split(':')[1],
  dialect: 'mysql'
});



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
