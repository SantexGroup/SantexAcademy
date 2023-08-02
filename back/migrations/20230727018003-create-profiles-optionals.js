'use strict';

const { addForeingKey, PROFILES_OPTIONALS_TABLE_NAME, PROFILES_TABLE_NAME, OPTIONALS_TABLE_NAME } = require('../helpers/sequelize.helper');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(PROFILES_OPTIONALS_TABLE_NAME, {
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
      optionals_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await addForeingKey(queryInterface, PROFILES_OPTIONALS_TABLE_NAME, 'profiles_id', PROFILES_TABLE_NAME);
    await addForeingKey(queryInterface, PROFILES_OPTIONALS_TABLE_NAME, 'optionals_id', OPTIONALS_TABLE_NAME);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(PROFILES_OPTIONALS_TABLE_NAME);
  }
};