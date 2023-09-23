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
        nombre: 'Alumno 1',
        apellido: 'Alumno 1',
        email: 'alumno1@gmail.com',
        username: 'alumno1',
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
        nombre: 'Alumno 2',
        apellido: 'Alumno 2',
        email: 'alumno2@gmail.com',
        username: 'alumno2',
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
        nombre: 'Alumno 3',
        apellido: 'Alumno 3',
        email: 'alumno3@gmail.com',
        username: 'alumno3',
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
        nombre: 'Alumno 4',
        apellido: 'Alumno 4',
        email: 'alumno4@gmail.com',
        username: 'alumno4',
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
        nombre: 'Alumno 5',
        apellido: 'Alumno 5',
        email: 'alumno5@gmail.com',
        username: 'alumno5',
        password: bcrypt.hashSync('12345678', bcrypt.genSaltSync()),
        activoactualmente: true,
        idtipodeusuario: 2,
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
