'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'verificationCode', {
      type: Sequelize.STRING,
      allowNull: true // El código podría ser nulo hasta que se verifique
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'verificationCode');
  }
};

// Ejecutar desde la carpeta back
// Windows back> ./node_modules/.bin/sequelize db:migrate --to 20230307002718-add-verificationCode.js
// Linux /back$ ./node_modules/.bin/sequelize db:migrate --to 20230307002718-add-verificationCode.js