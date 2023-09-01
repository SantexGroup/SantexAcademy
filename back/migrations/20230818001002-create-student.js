/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      document_number: {
        type: Sequelize.INTEGER,
      },
      id_cohort: {
        type: Sequelize.INTEGER,
      },
      id_contact_information: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ContactInformations',
          key: 'id'
        },
      },
      id_user: {
        type: Sequelize.INTEGER,
      },
      birth_date: {
        type: Sequelize.DATE,
      },
      situation: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Students');
  },
};
