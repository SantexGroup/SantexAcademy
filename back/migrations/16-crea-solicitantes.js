'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("solicitantes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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

      id_descripcion_telefono: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "descripciones_telefonos",
          key: "id",
        },
      },

      descripcion_telefono: {
        type: Sequelize.STRING(50)
      },

      numer_telefono: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
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

    
    await queryInterface.addConstraint('solicitantes', {
      fields: ['id_descripcion_telefono'],
      type: 'foreign key',
      name: 'fk_id_descripcion_telefono', // Nombre personalizado de la clave foránea
      references: {
        table: 'descripciones_telefonos', // Nombre de la tabla a la que se hace referencia
        field: 'id',   // Nombre de la columna a la que se hace referencia
      },
      // onDelete: 'cascade', // Comportamiento en cascada al eliminar no estoy seguro si usarla
      // onUpdate: 'cascade', // Comportamiento en cascada al actualizar no estoy seguro si conviene usarla
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('solicitantes');

    await queryInterface.removeConstraint('solicitantes', 'fk_id_descripcion_telefono');
  }
};