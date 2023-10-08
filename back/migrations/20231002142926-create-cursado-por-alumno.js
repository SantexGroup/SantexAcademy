'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('CursadoPorAlumno', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      courseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Cursos',
          key: 'id'
        }
      },
      notas: {
        type: Sequelize.TEXT,
        defaultValue: JSON.stringify([])
      },
      notaFinal: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      },
      asistencia: {
        type: Sequelize.TEXT
      },
      condAsistencia: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CursadoPorAlumno');
  }


};
