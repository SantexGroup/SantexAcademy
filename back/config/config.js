require('dotenv').config();

const logger = require('../utils/winston.logger');
/**
 * To add new configuration create a new file in
 * the ./config folder, define the variable as an
 * object, export it and then import the file in here.
 */

const config = {
  development: {
    logging: (msg) => logger.api.debug(`Database: ${process.env.DB_DATABASE} - ${msg}`),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: '0',
    seederStorage: 'sequelize', // Indica que se almacenará en la base de datos
    seederStorageTableName: 'SequelizeSeeds', // Nombre de la tabla para almacenar información de seeders
  },
  test: {
    logging: (msg) => logger.api.debug(`Database: ${process.env.DB_DATABASE} - ${msg}`),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: '0',
  },
  production: {
    logging: (msg) => logger.api.debug(`Database: ${process.env.DB_DATABASE} - ${msg}`),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: '0',
  },

};

module.exports = config;
