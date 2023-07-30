'use strict';

const { MARITALS_TABLE_NAME } = require('../helpers/sequelize.helper');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      MARITALS_TABLE_NAME,
      [
        {
          condition: 'Casado',
        },
        {
          condition: 'Casada',
        },
        {
          condition: 'Soltero',
        },
        {
          condition: 'Soltera',
        },
        {
          condition: 'Viudo',
        },
        {
          condition: 'Viuda',
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
    await queryInterface.bulkDelete(MARITALS_TABLE_NAME, null, {});
  },
};
