'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('localidades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
 
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

      // id_provincia: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: "provincias",
      //     key: "id",
      //   },
      // },

      // nombre_provincia: {
      //   type: Sequelize.STRING(50),
      // },

      activo: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('localidades');
  }
};