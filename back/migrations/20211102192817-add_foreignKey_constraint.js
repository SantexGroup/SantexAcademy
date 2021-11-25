module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.addConstraint('pets', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'FK_users_pets', // optional
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.removeConstraint('pets', 'FK_users_pets');
  },
};
