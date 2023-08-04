/* eslint-disable no-unused-vars */
/* eslint-disable strict */

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Roles', [
      {
        role_name: 'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_name: 'alumno',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_name: 'administrador',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  },
};
