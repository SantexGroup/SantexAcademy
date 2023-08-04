'use strict';

const { FORMATIONS_TYPES_TABLE_NAME } = require("../helpers/sequelize.helper");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      FORMATIONS_TYPES_TABLE_NAME,
      [
        {
          type: 'Autodidacta',
        },
        {
          type: 'Universidad',
        },
        {
          type: 'Terceario',
        },
        {
          type: 'Secundario',
        },
        {
          type: 'Curso',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(FORMATIONS_TYPES_TABLE_NAME, null, {});  
  }
};
