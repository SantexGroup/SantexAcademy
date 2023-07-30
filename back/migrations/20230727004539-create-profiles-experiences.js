'use strict';

const { addForeingKey, PROFILES_EXPERIENCES_TABLE_NAME, EXPIRIENCES_TABLE_NAME, PROFILES_TABLE_NAME } = require('../helpers/sequelize.helper');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(PROFILES_EXPERIENCES_TABLE_NAME, {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      experiences_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      profiles_id: {
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

    await addForeingKey(queryInterface, PROFILES_EXPERIENCES_TABLE_NAME, 'experiences_id', EXPIRIENCES_TABLE_NAME);
    await addForeingKey(queryInterface, PROFILES_EXPERIENCES_TABLE_NAME, 'profiles_id', PROFILES_TABLE_NAME);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(PROFILES_EXPERIENCES_TABLE_NAME);
  }
};

