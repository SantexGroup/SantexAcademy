'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id:1,
        idDireccion: 1,
        firstName: 'Erick',
        lastName: 'Echegaray',
        dni: 39440238,
        mail: 'erick@gmail.com',
        password: '123456',
        estadoDeVendedor: 0,
        alias: 'erickechegaray',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        idDireccion: 2,
        firstName: 'Mara',
        lastName: 'Delgadillo',
        dni: 28767856,
        mail: 'mara@gmail.com',
        password: '123456',
        estadoDeVendedor: 0,
        alias: 'maradelgadillo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        idDireccion: 3,
        firstName: 'Tadeo',
        lastName: 'Ressio',
        dni: 28767856,
        mail: 'tadeo@gmail.com',
        password: '123456',
        estadoDeVendedor: 0,
        alias: 'tadeoressio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        idDireccion: 4,
        firstName: 'Agustin',
        lastName: 'Silva',
        dni: 28767856,
        mail: 'agustin@gmail.com',
        password: '123456',
        estadoDeVendedor: 1,
        alias: 'agustinsilva',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        idDireccion: 5,
        firstName: 'Karen',
        lastName: 'Ale',
        dni: 28767856,
        mail: 'karen@gmail.com',
        password: '123456',
        estadoDeVendedor: 1,
        alias: 'karenale',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        idDireccion: 6,
        firstName: 'Leo',
        lastName: 'Cortes',
        dni: 28767856,
        mail: 'leo@gmail.com',
        password: '123456',
        estadoDeVendedor: 1,
        alias: 'leocortes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
  }
};
