// Creacion de tabla 

'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("dispositivos_electronicos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      descripcion_dispositivo_electronico: {
        type: Sequelize.STRING(150)
      },

      modelo_dispositivo_electronico: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },

      cantidad_actual: {
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

      id_descripcion_dispositivo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // references: {
        //   model: "descripciones_dispositivos",
        //   key: "id",
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE',
      },

      descripcion_dispositivo: {
        type: Sequelize.STRING(50)
      },

      id_estado_dispositivo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //   model: "estados_dispositivos", // Nombre de la tabla a la que se hace referencia
        //   key: "id", // Nombre de la columna a la que se hace referencia
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE',
      },

      estado_dispositivo: {
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

    await queryInterface.addConstraint('dispositivos_electronicos', {
      fields: ['id_descripcion_dispositivo'],
      type: 'foreign key',
      name: 'fk_id_descripcion_dispositivo', // Nombre personalizado de la clave foránea
      references: {
        table: 'descripciones_dispositivos', // Nombre de la tabla a la que se hace referencia
        field: 'id', // Nombre de la columna a la que se hace referencia
      },
      // onDelete: 'cascade', // Comportamiento en cascada al eliminar no estoy seguro si usarla
      // onUpdate: 'cascade', // Comportamiento en cascada al actualizar no estoy seguro si conviene usarla
    });

    await queryInterface.addConstraint('dispositivos_electronicos', {
      fields: ['id_estado_dispositivo'],
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
    await queryInterface.dropTable('dispositivos_electronicos');

    await queryInterface.removeConstraint('dispositivos_electronicos', 'fk_id_descripcion_dispositivo');

    await queryInterface.removeConstraint('dispositivos_electronicos', 'fk_id_estado_dispositivo');
  }
};