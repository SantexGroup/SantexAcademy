module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.addColumn(
    'users',
    'phone_number',
    {
      type: Sequelize.STRING,
      defaultValue: null,
      allowNull: true,
    },
  ),

  down: async (queryInterface) => queryInterface.removeColumn('users', 'phone_number'),
};
