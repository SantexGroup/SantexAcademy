const { Sequelize } = require('sequelize'); // Take the Sequelize Class
require('dotenv').config();

// Se crea la instancia de sequelize con los datos de conexión a la base de datos en el CONSTRUCTOR
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,

  // luego se pasa un objeto de configuración con el host y el dialecto
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
