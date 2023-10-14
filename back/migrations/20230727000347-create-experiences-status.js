'use strict';

const { EXPERIENCES_STATUS_TABLE_NAME } = require('../helpers/sequelize.helper');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(EXPERIENCES_STATUS_TABLE_NAME, {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      status: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(EXPERIENCES_STATUS_TABLE_NAME);
  }
};