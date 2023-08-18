/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Publications', {
      id: Sequelize.STRING,
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      image: Sequelize.STRING,
      start_date: Sequelize.DATE,
      finish_date: Sequelize.DATE,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Publications');
  },
};
