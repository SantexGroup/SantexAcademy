'use strict';

const { FORMATIONS_TABLE_NAME } = require("../helpers/sequelize.helper");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      FORMATIONS_TABLE_NAME,
      [
        {
          status_id: '1',
          types_id: '1',
          title: 'Escritor',
          institute: 'Autodidacta',
          description: 'Escribo por Gusto',
        },
        {
          status_id: '3',
          types_id: '5',
          title: 'Consejero',
          institute: 'Pinocho',
          description: 'Consejero por desicion',
        },
        {
          status_id: '1',
          types_id: '2',
          title: 'Carpintero',
          institute: 'Mi padre',
          description: 'Construccion de Muebles, juguetes de madera',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(FORMATIONS_TABLE_NAME, null, {});  
  }
};
