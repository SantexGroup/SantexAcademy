// Creacion de tabla 

'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("donaciones_dispositivos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      cantidad_donada: {
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

      id_donacion: {
        type: Sequelize.INTEGER,
        allowNull: false
        // references: {
        //   model: "donaciones", // Nombre de la tabla a la que se hace referencia
        //   key: "id", // Nombre de la columna a la que se hace referencia
        // },
      },

      descripcion_donacion: {
        type: Sequelize.STRING(200)
      },

      id_dispositivo_electronico: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "dispositivos_electronicos", // Nombre de la tabla a la que se hace referencia
          key: "id", // Nombre de la columna a la que se hace referencia
        },
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

    await queryInterface.addConstraint('donaciones_dispositivos', {
      fields: ['id_donacion'],
      type: 'foreign key',
      name: 'fk_id_donacion', // Nombre personalizado de la clave foránea
      references: {
        table: 'donaciones', // Nombre de la tabla a la que se hace referencia
        field: 'id', // Nombre de la columna a la que se hace referencia
      },
      // onUpdate: 'cascade', // Comportamiento en cascada al actualizar no estoy seguro si conviene usarla
      // onDelete: 'cascade', // Comportamiento en cascada al eliminar no estoy seguro si usarla
    });

    await queryInterface.addConstraint('donaciones_dispositivos', {
      fields: ['id_dispositivo_electronico'],
      type: 'foreign key',
      name: 'fk_id_dispositivo_electronico_donacion', // Nombre personalizado de la clave foránea
      references: {
        table: 'dispositivos_electronicos', // Nombre de la tabla a la que se hace referencia
        field: 'id', // Nombre de la columna a la que se hace referencia
      },
      // onUpdate: 'cascade', // Comportamiento en cascada al actualizar no estoy seguro si conviene usarla
      // onDelete: 'cascade', // Comportamiento en cascada al eliminar no estoy seguro si usarla
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('donaciones_dispositivos');
    
    await queryInterface.removeConstraint('donaciones_dispositivos', 'fk_id_donacion');

    await queryInterface.removeConstraint('donaciones_dispositivos', 'fk_id_dispositivo_electronico_donacion');
  }
};