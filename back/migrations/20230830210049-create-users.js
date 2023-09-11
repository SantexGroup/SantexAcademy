'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.BOOLEAN
      },
      /* Saco de aqui para no tener que borrar la base y migrar todo de nuevo, creo archivo 20230830210101-add-rol-in-users.js así si solo falta afregar este campo rol use: ./node_modules/.bin/sequelize db:migrate --name 20230830210049-create-user (sin .js) para migrar este campo en especifico. Igualmente si borra su base bastara con poner: ./node_modules/.bin/sequelize db:migrate y hara todas las tablas y campos necesarios sin inconvenientes */
      // rol: {     
      //   type: Sequelize.STRING
      // },
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
    await queryInterface.dropTable('Users');
  }
};