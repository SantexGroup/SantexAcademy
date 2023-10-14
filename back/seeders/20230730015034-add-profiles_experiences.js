'use strict';

const { PROFILES_EXPERIENCES_TABLE_NAME } = require("../helpers/sequelize.helper");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      PROFILES_EXPERIENCES_TABLE_NAME,
      [
        {
          profiles_id: '1',
          experiences_id: '1',
        },
        {
          profiles_id: '2',
          experiences_id: '2',
        },
        {
          profiles_id: '3',
          experiences_id: '3',
        },
        {
          profiles_id: '1',
          experiences_id: '2',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(PROFILES_EXPERIENCES_TABLE_NAME, null, {});  
  }
};
