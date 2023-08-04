/* eslint-disable no-unused-vars */
/* eslint-disable strict */

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('courses', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: Sequelize.STRING,
      description: Sequelize.TEXT,
      start_date: Sequelize.DATE,
      finish: Sequelize.DATE,
      duration: Sequelize.INTEGER,
      teacher_id: Sequelize.INTEGER,
      maximun_quota: Sequelize.INTEGER,
      current_quota: Sequelize.INTEGER,
      price: Sequelize.INTEGER,
      status: {
        type: Sequelize.ENUM('activo', 'inactivo', 'en curso', 'finalizado', 'proximamente'),
        defaultValue: 'inactivo',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     *
     */
    await queryInterface.dropTable('courses');
  },
};
