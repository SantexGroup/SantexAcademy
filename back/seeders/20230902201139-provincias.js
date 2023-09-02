'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('provincia', [
      {
        idPais: 1,
        nombre: 'Cordoba',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPais: 1,
        nombre: 'Buenos Aires',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idPais: 1,
        nombre: 'Santa Fe',
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
