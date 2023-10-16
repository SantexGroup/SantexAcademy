// Creacion de tabla probincias

'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('provincias', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
 
      // codigo_afip: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   defaultValue: 0
      // },

      // abreviatura: {
      //   type: Sequelize.STRING(3) o (5)
      // },

      nombre: {
        type: Sequelize.STRING(50)
      },

      // prefijo_telefonico: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   defaultValue: 0
      // },

      activo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1 
      },

      por_defecto: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0 
      },

      // orden: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   defaultValue: 0 
      // },

      creado_por: {
        type: Sequelize.STRING(50)
      },

      fecha_creacion: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.DATEONLY,
        onInsert: Sequelize.DATEONLY
      },

      modificado_por: {
        type: Sequelize.STRING(50)
      },

      fecha_modificacion: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.DATEONLY,
        onInsert: Sequelize.DATEONLY,
        onUpdate: Sequelize.DATEONLY
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('provincias');
  }
};