'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cursos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      imagen: {
        type: Sequelize.STRING
      },
      duracion: {
        type: Sequelize.INTEGER
      },
      capacidad: {
        type: Sequelize.INTEGER
      },
      idnivel: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Nivels',
            // schema: 'schema',
          },
          key: 'id',
        },
        allowNull: false,
      },
      requisitos: {
        type: Sequelize.TEXT
      },
      habilitado: {
        type: Sequelize.BOOLEAN
      },
      fechaInicio: {
        type: Sequelize.DATE
      },
      fechafin: {
        type: Sequelize.DATE
      },
      idusuarioalta: {
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.STRING
      },
      idusuariomodificacion: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cursos');
  }
};