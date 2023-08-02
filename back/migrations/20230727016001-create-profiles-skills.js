'use strict';

const { addForeingKey, PROFILES_SKILLS_TABLE_NAME, SKILLS_TABLE_NAME, PROFILES_TABLE_NAME } = require('../helpers/sequelize.helper');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(PROFILES_SKILLS_TABLE_NAME, {
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
      skills_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      level: {
        type: Sequelize.SMALLINT
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

    await addForeingKey(queryInterface, PROFILES_SKILLS_TABLE_NAME, 'profiles_id', PROFILES_TABLE_NAME);
    await addForeingKey(queryInterface, PROFILES_SKILLS_TABLE_NAME, 'skills_id', SKILLS_TABLE_NAME);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(PROFILES_SKILLS_TABLE_NAME);
  }
};