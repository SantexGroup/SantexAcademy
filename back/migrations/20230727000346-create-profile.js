'use strict';

const { addForeingKey, PROFILES_TABLE_NAME, USERS_TABLE_NAME } = require('../helpers/sequelize.helper');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(PROFILES_TABLE_NAME, {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      profileName: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await addForeingKey(queryInterface, PROFILES_TABLE_NAME, 'user_id', USERS_TABLE_NAME);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(PROFILES_TABLE_NAME);
  }
};