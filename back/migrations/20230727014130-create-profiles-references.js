'use strict';

const { addForeingKey, PROFILES_REFERENCES_TABLE_NAME, PROFILES_TABLE_NAME, REFERENCES_TABLE_NAME } = require('../helpers/sequelize.helper');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(PROFILES_REFERENCES_TABLE_NAME, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profiles_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      wreferences_id: {
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

    await addForeingKey(queryInterface, PROFILES_REFERENCES_TABLE_NAME, 'profiles_id', PROFILES_TABLE_NAME);
    await addForeingKey(queryInterface, PROFILES_REFERENCES_TABLE_NAME, 'wreferences_id', REFERENCES_TABLE_NAME);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(PROFILES_REFERENCES_TABLE_NAME);
  }
};