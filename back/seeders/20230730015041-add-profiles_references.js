'use strict';

const { PROFILES_REFERENCES_TABLE_NAME } = require("../helpers/sequelize.helper");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      PROFILES_REFERENCES_TABLE_NAME,
      [
        {
          profiles_id: '1',
          wreferences_id: '1',
        },
        {
          profiles_id: '1',
          wreferences_id: '2',
        },
        {
          profiles_id: '2',
          wreferences_id: '1',
        },
        {
          profiles_id: '3',
          wreferences_id: '3',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(PROFILES_REFERENCES_TABLE_NAME, null, {});  
  }
};
