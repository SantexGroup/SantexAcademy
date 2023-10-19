'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        id: 1,
        idUsuario: 1,
        idTipoProducto: 1,
        nombre: 'Mesa Esparta Madera',
        detalles: 'Madera maciza Zoita, 4cm de espesor.',
        precio: 15000,
        envio: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        estado: true,
      },
      {
        id: 2,
        idUsuario: 2,
        idTipoProducto: 2,
        nombre: 'Sillas Paris x10',
        detalles: 'Sillas Plastico Paris Mascardi Reforzado.',
        precio: 3500,
        envio: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        estado: true,
      },
      {
        id: 3,
        idUsuario: 3,
        idTipoProducto: 3,
        nombre: 'Escritorio PC',
        detalles: 'Escritorio de madera y hierro.',
        precio: 3500,
        envio: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        estado: true,
      },
      {
        id: 4,
        idUsuario: 4,
        idTipoProducto: 4,
        nombre: 'Sillon Nordico',
        detalles: 'Sillón realizado en madera de pino.',
        precio: 3000,
        envio: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        estado: true,
      },
      {
        id: 5,
        idUsuario: 5,
        idTipoProducto: 5,
        nombre: 'Servicio de catering',
        detalles: '20 años de experiencia en eventos.',
        precio: 250000,
        envio: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        estado: true,
      },
      {
        id: 6,
        idUsuario: 6,
        idTipoProducto: 6,
        nombre: 'Platos blancos x20',
        detalles: 'platos de vidrio templado',
        precio: 5000,
        envio: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        estado: true,
      },
      {
        id: 7,
        idUsuario: 1,
        idTipoProducto: 1,
        nombre: 'Mesa malcom',
        detalles: 'mesa malcom estilo industrial',
        precio: 3000,
        envio: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        estado: true,
      },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
