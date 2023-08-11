'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Images', [
      {
        url: 'https://mueble1.com/image1.jpg',
        idProducto: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://mueble2.com/image2.jpg',
        idProducto: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://mueble3.com/image3.jpg',
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
