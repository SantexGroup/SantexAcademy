'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Images', [
      {
        id: 1,
        url: 'mesa01.jpeg',
        idProducto: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        url: 'silla01.jpg',
        idProducto: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        url: 'escritorio01.jpg',
        idProducto: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
