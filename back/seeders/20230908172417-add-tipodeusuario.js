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

    await queryInterface.bulkInsert('TipoDeUsuarios', [
      {
        nombre: 'Administrador',
        descripcion: 'Administrador',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Alumno',
        descripcion: 'Alumno',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Docente',
        descripcion: 'Docente',
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

    await queryInterface.bulkDelete('TipoDeUsuarios', null, {});
  }
};
