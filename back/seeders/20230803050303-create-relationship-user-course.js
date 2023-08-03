'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const userId = 1; 
    const courseId = 2; 
    await queryInterface.bulkInsert('User_Courses', [
      {
        user_id: userId,
        course_id: courseId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        course_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User_Courses', null, {});


  }
};
