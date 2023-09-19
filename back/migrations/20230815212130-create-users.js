'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users.model', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userNombreCompleto: {
        type: Sequelize.STRING,
      },
      userUsuario: {
        type: Sequelize.STRING,
      },
      userPassword: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      userFechaDeNacimiento: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  },
};
