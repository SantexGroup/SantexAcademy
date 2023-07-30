'use strict';

const { FORMATIONS_STATUS_TABLE_NAME } = require("../helpers/sequelize.helper");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      FORMATIONS_STATUS_TABLE_NAME,
      [
        {
          status: 'En curso',
        },
        {
          status: 'Finalizado',
        },
        {
          status: 'Abandonado',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(FORMATIONS_STATUS_TABLE_NAME, null, {});  
  }
};
