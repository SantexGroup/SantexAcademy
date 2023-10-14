'use strict';

const { COUNTRIES_TABLE_NAME } = require("../helpers/sequelize.helper");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      COUNTRIES_TABLE_NAME,
      [
        {
          country: 'Afganistán',
        },
        {
          country: 'Albania',
        },
        {
          country: 'Alemania',
        },
        {
          country: 'Andorra',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(COUNTRIES_TABLE_NAME, null, {});  
  }
};
