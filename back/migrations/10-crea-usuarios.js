// Creacion de tabla 

'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("usuarios", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      nombre: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },

      contrasenia: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },

      email: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },

      id_rol: {
        type: Sequelize.INTEGER,
        allowNull: false
        // references: {
        //   model: "roles", // Nombre de la tabla a la que se hace referencia
        //   key: "id",   // Nombre de la columna a la que se hace referencia
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE',
        // field: "id_rol",
      },

      descripcion_rol: {
        type: Sequelize.STRING(50)
      },

      activo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },

      fecha_creacion: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.DATEONLY,
        onInset: Sequelize.DATEONLY
      },

      fecha_modificacion: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.DATEONLY,
        onInset: Sequelize.DATEONLY,
        onUpdate: Sequelize.DATEONLY
      }

    });

    await queryInterface.addConstraint('usuarios', {
      fields: ['id_rol'],
      type: 'foreign key',
      name: 'fk_id_rol', // Nombre personalizado de la clave foránea
      references: {
        table: 'roles', // Nombre de la tabla a la que se hace referencia
        field: 'id',   // Nombre de la columna a la que se hace referencia
      },
      // onDelete: 'cascade', // Comportamiento en cascada al eliminar no estoy seguro si usarla
      // onUpdate: 'cascade', // Comportamiento en cascada al actualizar no estoy seguro si conviene usarla
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');

    await queryInterface.removeConstraint('usuarios', 'fk_id_rol');
  }
};