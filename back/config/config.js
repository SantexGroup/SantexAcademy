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
    username: 'root', // process.env.DB_USERNAME,
    password: '12345678', // process.env.DB_PASSWORD,
    database: 'club_de_horas', // process.env.DB_DATABASE,
    port: '3306', // process.env.DB_PORT,
    host: '172.17.0.2', // process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: '0',
  },
  test: {
    logging: (msg) => logger.api.debug(`Database: ${process.env.DB_DATABASE} - ${msg}`),
    username: 'root', // process.env.DB_USERNAME,
    password: '12345678', // process.env.DB_PASSWORD,
    database: 'club_de_horas', // process.env.DB_DATABASE,
    port: '3306', // process.env.DB_PORT,
    host: '172.17.0.2', // process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: '0',
  },
  production: {
    logging: (msg) => logger.api.debug(`Database: ${process.env.DB_DATABASE} - ${msg}`),
    username: 'root', // process.env.DB_USERNAME,
    password: '12345678', // process.env.DB_PASSWORD,
    database: 'club_de_horas', // process.env.DB_DATABASE,
    port: '3306', // process.env.DB_PORT,
    host: '172.17.0.2', // process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: '0',
  },
};

module.exports = config;
