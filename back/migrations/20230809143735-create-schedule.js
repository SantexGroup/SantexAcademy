'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      start: {
        type: Sequelize.DATE
      },
      end: {
        type: Sequelize.DATE
      },
      where: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      //courseId:{
       // type:Sequelize.INTEGER
     // }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('schedules');
  }
};