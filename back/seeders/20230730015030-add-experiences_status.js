'use strict';

const { EXPERIENCES_STATUS_TABLE_NAME } = require("../helpers/sequelize.helper");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      EXPERIENCES_STATUS_TABLE_NAME,
      [
        {
          status: 'Trabajo Actual',
        },
        {
          status: 'Renuncia',
        },
        {
          status: 'Cese de actividades',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(EXPERIENCES_TABLE_NAME, null, {});  
  }
};
