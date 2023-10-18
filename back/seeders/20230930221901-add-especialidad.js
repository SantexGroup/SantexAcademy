'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Especialidads', [
      {
        nombre: 'Ciencias de la Computación',
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Análisis de Datos',
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Tecnologías de la Información',
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
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
    await queryInterface.bulkDelete('Especialidads', null, {});
  }
};
