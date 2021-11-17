module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('pets', {
      fields: ['breedId'],
      type: 'foreign key',
      name: 'pet-breed-association',
      references: {
        table: 'breeds',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('pets', {
      fields: ['breedId'],
      type: 'foreign key',
      name: 'pet-breed-association',
      references: {
        table: 'breeds',
        field: 'id',
      },
    });
  },
};
