'use strict';

const { addForeingKey, EXPIRIENCES_TABLE_NAME, EXPERIENCES_STATUS_TABLE_NAME, COUNTRIES_TABLE_NAME, EXPERIENCES_TYPES_TABLE_NAME } = require('../helpers/sequelize.helper');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(EXPIRIENCES_TABLE_NAME, {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      status_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      countries_id: {
        type: Sequelize.INTEGER
      },
      types_id: {
        type: Sequelize.INTEGER
      },
      position: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
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

    await addForeingKey(queryInterface, EXPIRIENCES_TABLE_NAME, 'status_id', EXPERIENCES_STATUS_TABLE_NAME);
    await addForeingKey(queryInterface, EXPIRIENCES_TABLE_NAME, 'countries_id', COUNTRIES_TABLE_NAME);
    await addForeingKey(queryInterface, EXPIRIENCES_TABLE_NAME, 'types_id', EXPERIENCES_TYPES_TABLE_NAME);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(EXPIRIENCES_TABLE_NAME);
  }
};