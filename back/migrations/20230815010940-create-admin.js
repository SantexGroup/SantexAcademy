/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('admins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstname: {
        type: Sequelize.STRING,
      },
      lastname: {
        type: Sequelize.STRING,
      },
      dni: {
        type: Sequelize.INTEGER,
      },
      phone: {
        type: Sequelize.INTEGER,
      },
      adress: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password_id: {
        type: Sequelize.INTEGER,
      },
      poll_id: {
        type: Sequelize.INTEGER,
      },
      roll: {
        type: Sequelize.ENUM(['admin']),
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('admins');
  },
};
