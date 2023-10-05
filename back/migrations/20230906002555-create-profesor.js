'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Profesors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      img: {
        defaultValue: '',
        type: Sequelize.URL,
      },
      nombreCompleto: {
        type: Sequelize.STRING
      },
      nombreUsuario: {
        type: Sequelize.STRING
      },
      fechaNacimiento: {
        type: Sequelize.DATE
      },
      genero: {
        type: Sequelize.STRING
      },
      profesion: {
        type: Sequelize.STRING
      },
      tipoContenido: {
        type: Sequelize.STRING
      },
      modalidadEnseñanza: {
        type: Sequelize.STRING
      },
      correoElectronico: {
        allowNull: true,
        unique: true,
        type: Sequelize.STRING
      },
      password: {
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
    await queryInterface.dropTable('Profesors');
  }
};