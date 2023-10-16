// Creacion de tabla 

'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("solicitudes_dispositivos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      cantidad_solicitada: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },

      fecha_adquisicion: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.DATEONLY,
        onInsert: Sequelize.DATEONLY
      },

      id_solicitud: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //   model: "solicitudes",
        //   key: "id",
        // },
      },

      descripcion_solicitud: {
        type: Sequelize.STRING(150)
      },

      id_dispositivo_electronico: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //   model: "dispositivos_electronicos", // Nombre de la tabla a la que se hace referencia
        //   key: "id", // Nombre de la columna a la que se hace referencia
        // },
      },

      descripcion_dispositivo_electronico: {
        type: Sequelize.STRING(100)
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
      fields: ['id_solicitud'],
      type: 'foreign key',
      name: 'fk_id_solicitud', // Nombre personalizado de la clave foránea
      references: {
        table: 'solicitudes', // Nombre de la tabla a la que se hace referencia
        field: 'id',   // Nombre de la columna a la que se hace referencia
      },
      // onUpdate: 'cascade', // Comportamiento en cascada al actualizar no estoy seguro si conviene usarla
      // onDelete: 'cascade', // Comportamiento en cascada al eliminar no estoy seguro si usarla
    });

    await queryInterface.addConstraint('solicitudes_dispositivos', {
      fields: ['id_dispositivo_electronico'],
      type: 'foreign key',
      name: 'fk_id_dispositivo_electronico', // Nombre personalizado de la clave foránea
      references: {
        table: 'dispositivos_electronicos', // Nombre de la tabla a la que se hace referencia
        field: 'id',   // Nombre de la columna a la que se hace referencia
      },
      // onUpdate: 'cascade', // Comportamiento en cascada al actualizar no estoy seguro si conviene usarla
      // onDelete: 'cascade', // Comportamiento en cascada al eliminar no estoy seguro si usarla
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('solicitudes_dispositivos');

    await queryInterface.removeConstraint('solicitudes_dispositivos', 'fk_id_solicitud');

    await queryInterface.removeConstraint('solicitudes_dispositivos', 'fk_id_dispositivo_electronico_solicitud');
  }
};