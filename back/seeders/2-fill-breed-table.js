'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('breeds', [
      {
        name: 'Labrador',
        dangerous: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Caniche',
        dangerous: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pittbull',
        dangerous: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cocker',
        dangerous: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('breeds', null, {});
  },
};
