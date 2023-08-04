'use strict';

const { addForeingKey, PROFILES_LANGUAGES_TABLE_NAME, PROFILES_TABLE_NAME, LANGUAGES_TABLE_NAME } = require('../helpers/sequelize.helper');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(PROFILES_LANGUAGES_TABLE_NAME, {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      profiles_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      languages_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      level: {
        type: Sequelize.SMALLINT
      },
    });

    await addForeingKey(queryInterface, PROFILES_LANGUAGES_TABLE_NAME, 'profiles_id', PROFILES_TABLE_NAME);
    await addForeingKey(queryInterface, PROFILES_LANGUAGES_TABLE_NAME, 'languages_id', LANGUAGES_TABLE_NAME);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(PROFILES_LANGUAGES_TABLE_NAME);
  }
};