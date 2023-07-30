'use strict';

const { SKILLS_TABLE_NAME } = require("../helpers/sequelize.helper");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      SKILLS_TABLE_NAME,
      [
        {
          skill: 'skill 1',
        },
        {
          skill: 'skill 2',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(SKILLS_TABLE_NAME, null, {});
  },
};
