// eslint-disable-next-line strict, lines-around-directive
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Registereds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idCourse: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Courses',
          key: 'id',
        },
      },
      idUser: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
    await queryInterface.addConstraint('Registereds', {
      fields: ['idUser', 'idCourse'],
      type: 'unique',
      name: 'unique_user_course',
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Registereds', 'unique_user_course');
    await queryInterface.dropTable('Registereds');
  }
};