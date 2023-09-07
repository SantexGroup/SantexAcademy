'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('localidads', [
      {
        idProvincia: 1,
        nombre: 'Cordoba Capital',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idProvincia: 1,
        nombre: 'Carlos Paz',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idProvincia: 1,
        nombre: 'Rio Cuarto',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        idProvincia: 2,
        nombre: 'CABA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idProvincia: 2,
        nombre: 'La Plata',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idProvincia: 2,
        nombre: 'Bahia Blanca',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        idProvincia: 3,
        nombre: 'Rosario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idProvincia: 3,
        nombre: 'Rafaela',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idProvincia: 3,
        nombre: 'Venado Tuerto',
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
