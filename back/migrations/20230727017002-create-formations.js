'use strict';

const { addForeingKey, FORMATIONS_TABLE_NAME, FORMATIONS_STATUS_TABLE_NAME, FORMATIONS_TYPES_TABLE_NAME } = require('../helpers/sequelize.helper');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(FORMATIONS_TABLE_NAME, {
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
      types_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING(100),
      },
      institute: {
        type: Sequelize.STRING(100),
      },
      description: {
        type: Sequelize.STRING(255),
      },
      startDate: {
        type: Sequelize.DATE,
      },
      endDate: {
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });

    await addForeingKey(queryInterface, FORMATIONS_TABLE_NAME, 'status_id', FORMATIONS_STATUS_TABLE_NAME);
    await addForeingKey(queryInterface, FORMATIONS_TABLE_NAME, 'types_id', FORMATIONS_TYPES_TABLE_NAME);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(FORMATIONS_TABLE_NAME);
  }
};