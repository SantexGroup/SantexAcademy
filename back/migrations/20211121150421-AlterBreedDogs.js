'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     
    return queryInterface.addConstraint('dogs', {
              fields: ['idRaza'],
              type: 'foreign key', 
              references: {
                table: 'razas',
                field: 'id',
              },
              onDelete: 'cascade',
              onUpdate: 'cascade',
            });  
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('dogs', 'foreign Key');        
  }
};
