'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        idFotos: 1,
        idUsuario: 1,
        idTipoProducto: 1,
        nombre: 'mesa',
        detalles: 'madera de pino, 50 x 100 cm',
        precio: 1000,
        envio: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idFotos: 2,
        idUsuario: 2,
        idTipoProducto: 2,
        nombre: 'sillas',
        detalles: '6 sillas de madera',
        precio: 1500,
        envio: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
