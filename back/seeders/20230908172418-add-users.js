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
        nombre: 'Admin',
        apellido: 'Admin',
        email: 'admin@gmail.com',
        username: 'admin',
        password: bcrypt.hashSync('12345678', bcrypt.genSaltSync()),
        activoactualmente: true,
        idtipodeusuario: 1,
        codeRegister: 'SinConfirmar',
        estado: 'A',
        verificationCode: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Alumno',
        apellido: 'Alumno',
        email: 'alumno@gmail.com',
        username: 'alumno',
        password: bcrypt.hashSync('12345678', bcrypt.genSaltSync()),
        activoactualmente: true,
        idtipodeusuario: 2,
        codeRegister: 'SinConfirmar',
        estado: 'A',
        verificationCode: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Docente',
        apellido: 'Docente',
        email: 'docente@gmail.com',
        username: 'docente',
        password: bcrypt.hashSync('12345678', bcrypt.genSaltSync()),
        activoactualmente: true,
        idtipodeusuario: 3,
        codeRegister: 'SinConfirmar',
        estado: 'A',
        verificationCode: false,
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

    await queryInterface.bulkDelete('Users', null, {});
  }
};
