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

// Para añadir este campo a la tabla users ejecutar desde la carpeta back
// Windows back> ./node_modules/.bin/sequelize db:migrate --name 20230830210152-add-verificationCode-in-users
// Linux /back$ ./node_modules/.bin/sequelize db:migrate --name 20230830210152-add-verificationCode-in-users
// Luego ejecute la migracion:
//./node_modules/.bin/sequelize db:migrate --name 20230830210252-changeType-verificationCode-in-users