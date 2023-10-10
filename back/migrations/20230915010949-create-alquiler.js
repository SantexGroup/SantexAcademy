'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Alquilers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fechaInicio: {
        type: Sequelize.DATE
      },
      fechaFin: {
        type: Sequelize.DATE
      },
      precioFinal: { //precio total del alquiler
        type: Sequelize.FLOAT
      },
      verificadoPor: { // id de usuario trabajador que puede verificar la compra
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        }},
        solicitadoPor: {// id de usuario comprador que solicito la compra
          type: Sequelize.INTEGER,
          references: {
            model: 'Users', 
            key: 'id',
          }},
          //estado que tiene de valor inicial "revision" luego puede ser "aprobado" o "denegado"
      estado:{
        type: Sequelize.STRING,
        defaultValue: "revision",
        // type: Sequelize.ENUM('en revision', 'aprobado', 'denegado')
        allowNull: false,
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
    await queryInterface.dropTable('Alquilers');
  }
};