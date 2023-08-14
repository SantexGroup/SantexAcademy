'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      maxStudents: {
        allowNull: false,
        type: Sequelize.STRING
      },
      start: {
        allowNull: false,
        type: Sequelize.DATE
      },
      end: {
        allowNull: false,
        type: Sequelize.DATE
      },
      active: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      requirement:{
        allowNull:false,
        type:Sequelize.STRING
      },
      teacher:{
        allowNull:false,
        type:Sequelize.STRING
      },
      CourseCategoryId:{
        allowNull:true,
        type:Sequelize.INTEGER,
        references:{
        model:'CourseCategories',
        key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
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
    await queryInterface.dropTable('Courses');
  }
};

