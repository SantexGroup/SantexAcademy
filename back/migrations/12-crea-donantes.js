// Creacion de tabla 

'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("donantes", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      razon_social: {
        type: Sequelize.STRING(100)
      },

      email: {
        type: Sequelize.STRING(150)
      },

      calle: {
        type: Sequelize.STRING(50)
      },

      numero: {
        type: Sequelize.STRING(5)
      },

      piso: {
        type: Sequelize.STRING(2)
      },

      departamento: {
        type: Sequelize.STRING(2)
      },

      codigo_postal: {
        type: Sequelize.STRING(2)
      },

      numero_telefono: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },

      id_descripcion_telefono: {
        type: Sequelize.INTEGER,
        allowNull: false
        // allowNull: false,
        // references: {
        //   model: "descripciones_telefonos", // Nombre de la tabla a la que se hace referencia
        //   key: "id", // Nombre de la columna a la que se hace referencia
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE',
      },

      descripcion_telefono: {
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

    await queryInterface.addConstraint('donantes', {
      fields: ['id_descripcion_telefono'],
      type: 'foreign key',
      name: 'fk_id_descripcion_telefono_donantes', // Nombre personalizado de la clave foránea
      references: {
        table: 'descripciones_telefonos', // Nombre de la tabla a la que se hace referencia
        field: 'id', // Nombre de la columna a la que se hace referencia
      },
      // onUpdate: 'cascade', // Comportamiento en cascada al actualizar no estoy seguro si conviene usarla
      // onDelete: 'cascade', // Comportamiento en cascada al eliminar no estoy seguro si usarla
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('donantes');

    await queryInterface.removeConstraint('donantes', 'fk_id_descripcion_telefono');
  }
};