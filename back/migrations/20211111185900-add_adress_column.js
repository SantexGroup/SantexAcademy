'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [ queryInterface.addColumn(
      'users',
      'adress',
      {
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true
      }
     ),
   ];
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'adress');
  }
};
