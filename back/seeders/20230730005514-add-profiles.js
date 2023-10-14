'use strict';

const { PROFILES_TABLE_NAME } = require("../helpers/sequelize.helper");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      PROFILES_TABLE_NAME,
      [
        {
          user_id: '1',
          profileName: 'Escritor',
        },
        {
          user_id: '1',
          profileName: 'Consejero',
        },
        {
          user_id: '2',
          profileName: 'Carpintero',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(PROFILES_TABLE_NAME, null, {});
  }
};
