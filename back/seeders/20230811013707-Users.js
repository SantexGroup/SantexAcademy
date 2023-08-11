'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        idDireccion: 1,
        firstName: 'Erick',
        lastName: 'Echegaray',
        dni: 39440238,
        mail: 'erick@gmail.com',
        password: 'holahola',
        estadoDeVendedor: 1,
        alias: 'erickechega',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idDireccion: 2,
        firstName: 'Oscar',
        lastName: 'Gutierrez',
        dni: 28767856,
        mail: 'oscar@gmail.com',
        password: 'chauchau',
        estadoDeVendedor: 0,
        alias: 'oscarguti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
  }
};
