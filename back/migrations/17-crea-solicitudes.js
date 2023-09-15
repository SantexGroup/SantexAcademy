'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("solicitudes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      id_solicitante: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "solicitantes",
          key: "id",
        },
      },

      razon_social_solicitante: {
        type: Sequelize.STRING(50)
      },

      descripcion_solicitud: {
        type: Sequelize.STRING(50)
      },

      fecha_solicitud: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.DATEONLY,
        onInsert: Sequelize.DATEONLY
      },

      id_estado_operacion: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "estados_operaciones",
          key: "id",
        },
      },

      estado_operacion: {
        type: Sequelize.STRING(50)
      },

      activo: {
        allowNull: false,
        type: Sequelize.INTEGER,
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

    await queryInterface.addConstraint('solicitudes', {
      fields: ['id_solicitante'],
      type: 'foreign key',
      name: 'fk_id_solicitante', // Nombre personalizado de la clave foránea
      references: {
        table: 'solicitantes', // Nombre de la tabla a la que se hace referencia
        field: 'id',   // Nombre de la columna a la que se hace referencia
      },
      // onDelete: 'cascade', // Comportamiento en cascada al eliminar no estoy seguro si usarla
      // onUpdate: 'cascade', // Comportamiento en cascada al actualizar no estoy seguro si conviene usarla
    });

    await queryInterface.addConstraint('solicitudes', {
      fields: ['id_estado_operacion'],
      type: 'foreign key',
      name: 'fk_id_estado_operacion', // Nombre personalizado de la clave foránea
      references: {
        table: 'estados_operaciones', // Nombre de la tabla a la que se hace referencia
        field: 'id',   // Nombre de la columna a la que se hace referencia
      },
      // onDelete: 'cascade', // Comportamiento en cascada al eliminar no estoy seguro si usarla
      // onUpdate: 'cascade', // Comportamiento en cascada al actualizar no estoy seguro si conviene usarla
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('solicitudes');
    
    await queryInterface.removeConstraint('solicitudes', 'fk_id_solicitante');

    await queryInterface.removeConstraint('solicitudes', 'fk_id_estado_operacion');
  }
};