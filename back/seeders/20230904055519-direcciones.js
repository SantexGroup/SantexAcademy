'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('direccions', [
      {
        idLocalidad: 1,
        calleYAltura: 'Bv San Juan 1250',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idLocalidad: 4,
        calleYAltura: 'Av Gral Paz 4567',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
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
