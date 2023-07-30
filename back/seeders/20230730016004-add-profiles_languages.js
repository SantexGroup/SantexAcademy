'use strict';

const { PROFILES_LANGUAGES_TABLE_NAME } = require("../helpers/sequelize.helper");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      PROFILES_LANGUAGES_TABLE_NAME,
      [
        {
          profiles_id: '1',
          languages_id: '1',
        },
        {
          profiles_id: '2',
          languages_id: '1',
        },
        {
          profiles_id: '1',
          languages_id: '2',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(PROFILES_LANGUAGES_TABLE_NAME, null, {});  
  }
};
