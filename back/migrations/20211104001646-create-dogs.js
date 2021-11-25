'use strict';

const dogs = require("../models/dogs");

const userModels = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombreDog: {
        type: Sequelize.STRING
      },
      raza: {
        type: Sequelize.STRING
      },
      sexo: {
        type: Sequelize.TINYINT
      },
      fechaNacimiento: {
        type: Sequelize.DATE
      },
      id_User: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      idRaza: {
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dogs');
  }
};