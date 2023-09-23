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
        userId: 3,
        cursoId: 1,
        estado: 'A',
        habilitado: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        cursoId: 1,
        estado: 'A',
        habilitado: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        cursoId: 2,
        estado: 'A',
        habilitado: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        cursoId: 3,
        estado: 'A',
        habilitado: true,
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
