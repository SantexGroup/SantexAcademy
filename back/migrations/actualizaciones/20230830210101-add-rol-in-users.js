'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'rol', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'verificationCode');
  }
};

// Ejecutar desde la carpeta back
// Windows back> ./node_modules/.bin/sequelize db:migrate --name 20230830210101-add-rol-in-users
// Linux /back$ ./node_modules/.bin/sequelize db:migrate --name 20230830210101-add-rol-in-users