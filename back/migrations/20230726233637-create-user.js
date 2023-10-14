"use strict";

const {addForeingKey, USERS_TABLE_NAME, ROLES_TABLE_NAME } = require("../helpers/sequelize.helper");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(USERS_TABLE_NAME, {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nick: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING(20),
      },
      pictureLink: {
        type: Sequelize.TEXT,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });

    await addForeingKey(queryInterface, USERS_TABLE_NAME, 'role_id', ROLES_TABLE_NAME);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(USERS_TABLE_NAME);
  },
};
