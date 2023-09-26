'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tipoProductos', [
      {
        id: 1,
        name: "mesas",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "sillas", 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "catering",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
    ], {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
