'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        idFotos: 1,
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
        idFotos: 2,
        idUsuario: 2,
        idTipoProducto: 2,
        nombre: 'Silla',
        detalles: 'Juego de sillas plastico x10',
        precio: 1500,
        envio: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idFotos: 3,
        idUsuario: 3,
        idTipoProducto: 1,
        nombre: 'Esctritorio PC',
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
