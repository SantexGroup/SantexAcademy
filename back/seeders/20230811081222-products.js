'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        id: 1,
        idUsuario: 1,
        idTipoProducto: 1,
        nombre: 'Mesa',
        detalles: 'Mesa de Roble',
        precio: 2000,
        envio: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        idUsuario: 1,
        idTipoProducto: 2,
        nombre: 'Silla',
        detalles: 'Juego de sillas plastico x10',
        precio: 1500,
        envio: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        idUsuario: 1,
        idTipoProducto: 1,
        nombre: 'Escritorio PC',
        detalles: 'Escritorio negro',
        precio: 3000,
        envio: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
