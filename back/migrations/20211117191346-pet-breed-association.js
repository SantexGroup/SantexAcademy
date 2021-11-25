module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('pets', {
      fields: ['breedId'],
      type: 'foreign key',
      name: 'FK_breeds_pets',
      references: {
        table: 'breeds',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {    
    return queryInterface.removeConstraint('pets', 'FK_breeds_pets');
  },
};
