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

    await queryInterface.bulkInsert('Nivels', [
      {
        nombre: 'Principiante',
        descripcion: 'Principiante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Intermedio',
        descripcion: 'Intermedio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Avanzado',
        descripcion: 'Avanzado',
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
    await queryInterface.bulkDelete('Nivels', null, {});
  }
};
