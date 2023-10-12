'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombreCompleto: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nombreUsuario: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      fechaNacimiento: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      genero: {
        type: Sequelize.STRING,
      },
      correoElectronico: {
        allowNull: true,
        unique: true,
        type: Sequelize.STRING,
      },
      contraseña: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};