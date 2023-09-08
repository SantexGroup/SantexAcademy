'use strict';

const bcrypt = require('bcrypt');

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
     *
    */

    await queryInterface.bulkInsert('Users', [
      {
        nombre: 'John',
        apellido: 'Doe',
        email: 'johndoe@gmail.com',
        username: 'johndoe',
        password: bcrypt.hashSync('12345678', bcrypt.genSaltSync()),
        estado: true,
        rol: 'alumno',
      },
      {
        nombre: 'Admin',
        apellido: 'Admin',
        email: 'admin@gmail.com',
        username: 'admin',
        password: bcrypt.hashSync('12345678', bcrypt.genSaltSync()),
        estado: true,
        rol: 'admin',
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

    await queryInterface.bulkDelete('Users', null, {});
  }
};
