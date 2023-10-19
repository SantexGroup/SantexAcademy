'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('provincia', [
      {
        id: 1,
        idPais: 1,
        nombre: 'Cordoba',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        idPais: 1,
        nombre: 'Buenos Aires',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        idPais: 1,
        nombre: 'Santa Fe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        idPais: 1,
        nombre: 'Mendoza',
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
