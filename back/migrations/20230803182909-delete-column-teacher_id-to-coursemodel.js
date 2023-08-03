'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn("courses","teacher_id")
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn("courses", "teacher_id",{
      type: Sequelize.INTEGER
    })
  }
};
