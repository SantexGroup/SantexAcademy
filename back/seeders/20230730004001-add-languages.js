'use strict';

const { LANGUAGES_TABLE_NAME } = require('../helpers/sequelize.helper');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      LANGUAGES_TABLE_NAME,
      [
        {
          language: 'Ingles',
        },
        {
          language: 'Español',
        },
        {
          language: 'Frances',
        },
        {
          language: 'Aleman',
        },
        {
          language: 'Chino',
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
    await queryInterface.bulkDelete(LANGUAGES_TABLE_NAME, null, {});
  },
};
