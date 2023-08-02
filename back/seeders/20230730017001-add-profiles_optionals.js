'use strict';

const { PROFILES_OPTIONALS_TABLE_NAME } = require("../helpers/sequelize.helper");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      PROFILES_OPTIONALS_TABLE_NAME,
      [
        {
          profiles_id: '1',
          optionals_id: '1',
        },
        {
          profiles_id: '2',
          optionals_id: '1',
        },
        {
          profiles_id: '1',
          optionals_id: '2',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(PROFILES_OPTIONALS_TABLE_NAME, null, {});  
  }
};
