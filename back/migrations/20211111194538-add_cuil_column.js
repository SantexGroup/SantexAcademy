'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'cuil',
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        after: 'password',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'cuil');
  }
};
