'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AlumnoNotas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idusuario: {
        type: Sequelize.INTEGER
      },
      idcurso: {
        type: Sequelize.INTEGER
      },
      fechaevidencia: {
        type: Sequelize.DATE
      },
      nota: {
        type: Sequelize.INTEGER
      },
      estado: {
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AlumnoNotas');
  }
};