"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Courses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        unique: true,
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING(1000),
      },
      description: {
        type: Sequelize.STRING,
      },
      maxStudents: {
        type: Sequelize.INTEGER,
      },
      start: {
        type: Sequelize.DATE,
      },
      end: {
        type: Sequelize.DATE,
      },
      active: {
        type: Sequelize.BOOLEAN,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      requirement: {
        type: Sequelize.STRING,
      },
      teacher: {
        type: Sequelize.STRING,
      },
      CourseCategoryId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "CourseCategories",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
    await queryInterface.dropTable("Courses");
  },
};
