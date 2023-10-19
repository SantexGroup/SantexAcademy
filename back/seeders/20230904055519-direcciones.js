'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('direccions', [
      {
        id: 1,
        idLocalidad: 1,
        calleYAltura: 'Bv San Juan 1250',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        idLocalidad: 2,
        calleYAltura: 'Las Malvinas 351',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        idLocalidad: 4,
        calleYAltura: 'Av Gral Paz 4567',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        idLocalidad: 5,
        calleYAltura: 'Diagonal 76 828',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        idLocalidad: 7,
        calleYAltura: 'Bv Avellaneda 1420',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        idLocalidad: 10,
        calleYAltura: 'Gutierrez 375',
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
