// Creacion de tabla 

'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("donaciones", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      id_donante: {
        type: Sequelize.INTEGER,
        allowNull: false
        // references: {
        //   model: "donantes", // Nombre de la tabla a la que se hace referencia
        //   key: "id", // Nombre de la columna a la que se hace referencia
        // },
      },

      razon_social_donante: {
        type: Sequelize.STRING(50)
      },

      descripcion_donacion: {
        type: Sequelize.STRING(50)
      },

      fecha_donacion: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.DATEONLY,
        onInsert: Sequelize.DATEONLY
      },

      id_estado_operacion: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //   model: "estados_operaciones", // Nombre de la tabla a la que se hace referencia
        //   key: "id", // Nombre de la columna a la que se hace referencia
        // },
      },

      estado_operacion: {
        type: Sequelize.STRING(50)
      },

      activo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },

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

    await queryInterface.addConstraint('donaciones', {
      fields: ['id_donante'],
      type: 'foreign key',
      name: 'fk_id_donante', // Nombre personalizado de la clave foránea
      references: {
        table: 'donantes', // Nombre de la tabla a la que se hace referencia
        field: 'id', // Nombre de la columna a la que se hace referencia
      },
      // onUpdate: 'cascade', // Comportamiento en cascada al actualizar no estoy seguro si conviene usarla
      // onDelete: 'cascade', // Comportamiento en cascada al eliminar no estoy seguro si usarla
    });

    await queryInterface.addConstraint('donaciones', {
      fields: ['id_estado_operacion'],
      type: 'foreign key',
      name: 'fk_id_estado_operacion_donante', // Nombre personalizado de la clave foránea
      references: {
        table: 'estados_operaciones', // Nombre de la tabla a la que se hace referencia
        field: 'id',   // Nombre de la columna a la que se hace referencia
      },
      // onUpdate: 'cascade', // Comportamiento en cascada al actualizar no estoy seguro si conviene usarla
      // onDelete: 'cascade', // Comportamiento en cascada al eliminar no estoy seguro si usarla
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('donaciones');

    await queryInterface.removeConstraint('donaciones', 'fk_id_donante');

    await queryInterface.removeConstraint('donaciones', 'id_estado_operacion_donante');
  }
};