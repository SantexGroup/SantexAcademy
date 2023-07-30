'use strict';

const { PROFILES_SKILLS_TABLE_NAME } = require("../helpers/sequelize.helper");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      PROFILES_SKILLS_TABLE_NAME,
      [
        {
          profiles_id: '1',
          skills_id: '1',
        },
        // {
        //   profiles_id: '2',
        //   skills_id: '1',
        // }
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(PROFILES_SKILLS_TABLE_NAME, null, {});  
  }
};
