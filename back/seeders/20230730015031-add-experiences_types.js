'use strict';

const { EXPERIENCES_TYPES_TABLE_NAME } = require("../helpers/sequelize.helper");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      EXPERIENCES_TYPES_TABLE_NAME,
      [
        {
          type: 'Trabajo',
        },
        {
          type: 'Pasantia',
        },
        {
          type: 'Voluntariado',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(EXPERIENCES_TYPES_TABLE_NAME, null, {});  
  }
};
