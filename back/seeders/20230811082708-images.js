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
      },
      {
        id: 4,
        url: 'mesa02.jpeg',
        idProducto: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        url: 'mesa03.jpeg',
        idProducto: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        url: 'silla02.jpg',
        idProducto: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        url: 'sillon-nordico01.jpg',
        idProducto: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        url: 'sillon-nordico02.jpg',
        idProducto: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        url: 'sillon-nordico03.jpg',
        idProducto: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        url: 'catering01.jpeg',
        idProducto: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        url: 'platos01.jpg',
        idProducto: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        url: 'mesa-malcom01.jpg',
        idProducto: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        url: 'mesa-malcom02.jpg',
        idProducto: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
