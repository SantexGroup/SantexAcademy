'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'cuil',
      {
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true,
        unique: true,
        after: 'password',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'cuil');
  }
};
