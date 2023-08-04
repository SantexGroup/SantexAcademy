/* eslint-disable no-unused-vars */

const { User, Course } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const allUsers = await User.findAll();
    const allCOurses = await Course.findAll();

    await queryInterface.bulkInsert('User_Courses', [
      {
        user_id: allUsers[0].id,
        course_id: allCOurses[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: allUsers[2].id,
        course_id: allCOurses[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User_Courses', null, {});
  },
};
