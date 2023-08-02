'use strict';

const { SEXS_TABLE_NAME } = require('../helpers/sequelize.helper');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      SEXS_TABLE_NAME,
      [
        {
          condition: 'Masculino',
        },      
        {
          condition: 'Femenino',
        },      
        {
          condition: 'No binario',
        },      
        {
          condition: 'Otro',
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
    await queryInterface.bulkDelete(SEXS_TABLE_NAME, null, {});
  },
};
