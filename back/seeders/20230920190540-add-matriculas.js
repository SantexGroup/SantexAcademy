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

    await queryInterface.bulkInsert('Matriculas', [
      {
        userId: 2,
        cursoId: 1,
        estado: 'pendiente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        cursoId: 4,
        estado: 'pendiente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        cursoId: 2,
        estado: 'pendiente',
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

    await queryInterface.bulkDelete('Matriculas', null, {});
  }
};
