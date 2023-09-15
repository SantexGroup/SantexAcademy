'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("solicitudes_dispositivos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      cantidad: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },

      fecha_adquisicion: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.DATEONLY,
        onInsert: Sequelize.DATEONLY
      },

      id_descripcion_dispositivo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "descripciones_dispositivos",
          key: "id",
        },
      },

      descripcion_dispositivo: {
        type: Sequelize.STRING(50)
      },

      id_estado_dispositivo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "estados_dispositivos",
          key: "id",
        },
      },

      estado_dispositivo: {
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
        type: Sequelize.STRING(50),
      },

      fecha_modificacion: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.DATEONLY,
        onInsert: Sequelize.DATEONLY,
        onUpdate: Sequelize.DATEONLY
      }
    });

    await queryInterface.addConstraint('solicitudes_dispositivos', {
      fields: ['id_estado_operacion'],
      type: 'foreign key',
      name: 'fk_id_descripcion_dispositivo', // Nombre personalizado de la clave foránea
      references: {
        table: 'descripciones_dispositivos', // Nombre de la tabla a la que se hace referencia
        field: 'id',   // Nombre de la columna a la que se hace referencia
      },
      // onDelete: 'cascade', // Comportamiento en cascada al eliminar no estoy seguro si usarla
      // onUpdate: 'cascade', // Comportamiento en cascada al actualizar no estoy seguro si conviene usarla
    });

    await queryInterface.addConstraint('solicitudes_dispositivos', {
      fields: ['id_estado_operacion'],
      type: 'foreign key',
      name: 'fk_id_estado_dispositivo', // Nombre personalizado de la clave foránea
      references: {
        table: 'estados_dispositivos', // Nombre de la tabla a la que se hace referencia
        field: 'id',   // Nombre de la columna a la que se hace referencia
      },
      // onDelete: 'cascade', // Comportamiento en cascada al eliminar no estoy seguro si usarla
      // onUpdate: 'cascade', // Comportamiento en cascada al actualizar no estoy seguro si conviene usarla
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('solicitudes_dispositivos');

    await queryInterface.removeConstraint('solicitudes_dispositivos', 'fk_id_descripcion_dispositivo');

    await queryInterface.removeConstraint('solicitudes_dispositivos', 'fk_id_estado_dispositivo');
  }
};