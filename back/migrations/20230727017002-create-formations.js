'use strict';

const { addForeingKey, FORMATIONS_TABLE_NAME, FORMATIONS_STATUS_TABLE_NAME, FORMATIONS_TYPE_TABLE_NAME } = require('../helpers/sequelize.helper');

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
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      institute: {
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

    await addForeingKey(queryInterface, FORMATIONS_TABLE_NAME, 'status_id', FORMATIONS_STATUS_TABLE_NAME);
    await addForeingKey(queryInterface, FORMATIONS_TABLE_NAME, 'types_id', FORMATIONS_TYPE_TABLE_NAME);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(FORMATIONS_TABLE_NAME);
  }
};