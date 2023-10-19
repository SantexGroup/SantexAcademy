'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('localidads', [
      {
        id: 1,
        idProvincia: 1,
        nombre: 'Cordoba Capital',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        idProvincia: 1,
        nombre: 'Carlos Paz',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        idProvincia: 1,
        nombre: 'Rio Cuarto',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 4,
        idProvincia: 2,
        nombre: 'CABA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        idProvincia: 2,
        nombre: 'La Plata',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        idProvincia: 2,
        nombre: 'Bahia Blanca',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 7,
        idProvincia: 3,
        nombre: 'Rosario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        idProvincia: 3,
        nombre: 'Rafaela',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        idProvincia: 3,
        nombre: 'Venado Tuerto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        idProvincia: 4,
        nombre: 'Mendoza',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {id: 11,
        idProvincia: 4,
        nombre: 'San Rafael',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        idProvincia: 4,
        nombre: 'Gral Alvear',
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
