module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Surveyors', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('activo', 'inactivo'),
        defaultValue: 'activo',
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Surveyors');
  },
};
