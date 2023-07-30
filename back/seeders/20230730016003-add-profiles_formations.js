'use strict';

const { PROFILES_FORMATIONS_TABLE_NAME } = require("../helpers/sequelize.helper");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      PROFILES_FORMATIONS_TABLE_NAME,
      [
        {
          profiles_id: '1',
          formations_id: '1',
        },
        {
          profiles_id: '2',
          formations_id: '1',
        },
        {
          profiles_id: '1',
          formations_id: '2',
        },
        {
          profiles_id: '3',
          formations_id: '3',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(PROFILES_FORMATIONS_TABLE_NAME, null, {});  
  }
};
