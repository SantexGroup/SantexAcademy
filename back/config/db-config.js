const { Sequelize } = require('sequelize'); // Take the Sequelize Class
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
);

const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida.');

    // Sincronizar todos los modelos definidos en la base de datos
    await sequelize.sync({ force: false });
  } catch (err) {
    console.error('Error al inicializar la base de datos.', err.message);
    throw err;
  }
};

module.exports = { sequelize, initializeDB };
