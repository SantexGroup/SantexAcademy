/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Courses', [{
      courseName: 'Acupuntura',
      courseStartDate: '2023-08-01',
      courseEndDate: '2023-10-01',
      attendance: 1,
      deleted: false,
      visualized: true,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Courses', null, {});
  },
};
