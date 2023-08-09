'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      courseName: {
        type: Sequelize.STRING
      },
      courseStartDate: {
        type: Sequelize.DATE
      },
      courseEndDate: {
        type: Sequelize.DATE
      },
      attendance: {
        type: Sequelize.INTEGER
      },
      deleted: {
        type: Sequelize.BOOLEAN
      },
      visualized: {
        type: Sequelize.BOOLEAN
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Courses');
  }
};
