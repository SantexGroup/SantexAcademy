'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up :async (queryInterface, Sequelize)=> {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addConstraint('Courses',{
      fields:['CourseCategoryId'],
      type:'foreign key',
      name:'course-courseCategory-association',
      references:{
        table:'CourseCategories',
        field:'id'
      }
    })
  },

  down: async(queryInterface, Sequelize)=> {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeConstraint('Courses',{
      fields:['CourseCategoryId'],
      type:'foreign key',
      name:'course-courseCategory-association',
      references:{
        table:'CourseCategories',
        field:'id'
      }
    })
  }
};
