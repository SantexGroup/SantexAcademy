/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      id: Sequelize.STRING,
      courseName: Sequelize.STRING,
      courseStartDate: Sequelize.DATE,
      courseEndDate: Sequelize.DATE,
      attendance: Sequelize.INTEGER,
      deleted: Sequelize.BOOLEAN,
      visualized: Sequelize.BOOLEAN,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Courses');
  },
};
