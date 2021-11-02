'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'lastname',
      {
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true,
        after: 'password',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'lastname');
  }
};
