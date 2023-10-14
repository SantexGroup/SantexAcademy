'use strict';

const { EXPERIENCES_TABLE_NAME } = require("../helpers/sequelize.helper");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      EXPERIENCES_TABLE_NAME,
      [
        {
          status_id: '1',
          countries_id: '1',
          types_id: '1',
          position: 'Escritor',
          company: 'Zapateria Yepeto',
          description: 'Escribir el dia a dia de Yepeto y Pinocho',
        },
        {
          status_id: '1',
          countries_id: '1',
          types_id: '2',
          position: 'Consejero',
          company: 'Aventuras de Pinocho',
          description: 'Ayudar a Pinocho a hacer el bien',
        },
        {
          status_id: '1',
          countries_id: '1',
          types_id: '1',
          position: 'Carpintero',
          company: 'Jugeteria Yepeto',
          description: 'Construir juguete y suecos de madera',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(EXPERIENCES_TABLE_NAME, null, {});  
  }
};
