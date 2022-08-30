module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('users',
    {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        comment: 'Primary key: Unique user ID.',
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        comment: 'Unique user name.',
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        comment: "User's password (hashed).",
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
    }),

  down: async (queryInterface) => {
    queryInterface.dropTable('users');
  },
};
