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
    username: process.env.DB_USERNAME, // 'root',
    password: process.env.DB_PASSWORD, // '12345678',
    database: process.env.DB_DATABASE, // 'club_de_horas',
    port: process.env.DB_PORT, //  '3306',
    host: process.env.DB_HOST, // '172.17.0.2',
    dialect: 'mysql',
    operatorsAliases: '0',
  },
  test: {
    logging: (msg) => logger.api.debug(`Database: ${process.env.DB_DATABASE} - ${msg}`),
    username: process.env.DB_USERNAME, // 'root',
    password: process.env.DB_PASSWORD, // '12345678',
    database: process.env.DB_DATABASE, // 'club_de_horas',
    port: process.env.DB_PORT, //  '3306',
    host: process.env.DB_HOST, // '172.17.0.2',
    dialect: 'mysql',
    operatorsAliases: '0',
  },
  production: {
    logging: (msg) => logger.api.debug(`Database: ${process.env.DB_DATABASE} - ${msg}`),
    username: process.env.DB_USERNAME, // 'root',
    password: process.env.DB_PASSWORD, // '12345678',
    database: process.env.DB_DATABASE, // 'club_de_horas',
    port: process.env.DB_PORT, //  '3306',
    host: process.env.DB_HOST, // '172.17.0.2',
    dialect: 'mysql',
    operatorsAliases: '0',
  },
};

module.exports = config;
