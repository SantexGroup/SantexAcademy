'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /*
    await queryInterface.bulkInsert('alquilers', [
      {
        id: 1,
        idProducto: 1,
        idEstado: 1,
        idComprador: 1,
        modoEnvio: 0,
        dias: 2,
        formaPago: "efectivo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        idProducto: 2,
        idEstado: 1,
        idComprador: 2,
        modoEnvio: 1,
        dias: 3,
        formaPago: "tarjeta",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
