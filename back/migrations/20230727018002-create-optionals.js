'use strict';

const { addForeingKey, OPTIONALS_TABLE_NAME, MARITALS_TABLE_NAME, SEXS_TABLE_NAME, COUNTRIES_TABLE_NAME } = require('../helpers/sequelize.helper');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(OPTIONALS_TABLE_NAME, {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      marital_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sexs_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      countries_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      profile: {
        type: Sequelize.STRING(100),
      },
      webPage: {
        type: Sequelize.STRING,
      },
      linkedIn: {
        type: Sequelize.STRING,
      },
      hobbies: {
        type: Sequelize.STRING,
      },
      aptitudes: {
        type: Sequelize.STRING,
      },
      driverLicense: {
        type: Sequelize.STRING,
      },
      aboutMe: {
        type: Sequelize.STRING,
      },
      achievements: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      zipCode: {
        type: Sequelize.STRING,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
    
    await addForeingKey(queryInterface, OPTIONALS_TABLE_NAME, 'countries_id', COUNTRIES_TABLE_NAME);
    await addForeingKey(queryInterface, OPTIONALS_TABLE_NAME, 'marital_id', MARITALS_TABLE_NAME);
    await addForeingKey(queryInterface, OPTIONALS_TABLE_NAME, 'sexs_id', SEXS_TABLE_NAME);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(OPTIONALS_TABLE_NAME);
  }
};