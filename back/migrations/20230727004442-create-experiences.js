const {
  addForeingKey,
  EXPERIENCES_TABLE_NAME,
  EXPERIENCES_STATUS_TABLE_NAME,
  COUNTRIES_TABLE_NAME,
  EXPERIENCES_TYPES_TABLE_NAME,
} = require('../helpers/sequelize.helper');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(EXPERIENCES_TABLE_NAME, {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      status_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      countries_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      types_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      position: {
        type: Sequelize.STRING(100),
      },
      company: {
        type: Sequelize.STRING(100),
      },
      description: {
        type: Sequelize.STRING(255),
      },
      startDate: {
        type: Sequelize.DATE,
      },
      endDate: {
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });

    await addForeingKey(queryInterface, EXPERIENCES_TABLE_NAME, 'status_id', EXPERIENCES_STATUS_TABLE_NAME);
    await addForeingKey(queryInterface, EXPERIENCES_TABLE_NAME, 'countries_id', COUNTRIES_TABLE_NAME);
    await addForeingKey(queryInterface, EXPERIENCES_TABLE_NAME, 'types_id', EXPERIENCES_TYPES_TABLE_NAME);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(EXPERIENCES_TABLE_NAME);
  },
};
