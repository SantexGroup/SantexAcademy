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
        nombre: 'Marta',
        apellido: 'Castro',
        email: 'martacastro@gmail.com',
        username: 'martacastro',
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
        nombre: 'Ana',
        apellido: 'Pérez',
        email: 'anaperez@gmail.com',
        username: 'anaperez',
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
        nombre: 'Carlos',
        apellido: 'Rodríguez',
        email: 'carlosrodriguez@gmail.com',
        username: 'carlosrodriguez',
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
        nombre: 'María',
        apellido: 'González',
        email: 'mariagonzalez@gmail.com',
        username: 'mariagonzalez',
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
        nombre: 'Javier',
        apellido: 'López',
        email: 'javierlopez@gmail.com',
        username: 'javierlopez',
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
        nombre: 'Laura',
        apellido: 'Sánchez',
        email: 'laurasanchez@gmail.com',
        username: 'laurasanchez',
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
        nombre: 'Laura',
        apellido: 'Morales',
        email: 'lauramorales@gmail.com',
        username: 'lauramorales',
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
