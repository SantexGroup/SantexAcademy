'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'codeRegister', {
      type: Sequelize.CHAR(16),
      allowNull: false,
      unique: true,
      defaultValue: 'SinConfirmar',
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'codeRegister');
  }
};
