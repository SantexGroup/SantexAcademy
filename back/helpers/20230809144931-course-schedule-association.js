'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addConstraint('schedules',{
      fields:['courseId'],
      type:'foreign key',
      name:'course-schedule-association',
      references:{
        table:'Courses',
        field:'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    queryInterface.removeConstraint('schedules',{
      fields:['courseId'],
      type:'foreign key',
      name:'course-schedule-association',
      references:{
        table:'Courses',
        field:'id'
      }
    })
  }
};
