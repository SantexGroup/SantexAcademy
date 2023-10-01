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
        nombre: 'Especialidad 1',
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Especialidad 2',
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Especialidad 3',
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
