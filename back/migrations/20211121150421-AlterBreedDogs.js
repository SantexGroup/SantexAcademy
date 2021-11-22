'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     
    return queryInterface.addConstraint('dogs', {
              fields: ['idRaza'],
              type: 'foreign key', 
              name: 'FK_Breeds_dogs', // optional
              references: {
                table: 'razas',
                field: 'id',
              },
              onDelete: 'cascade',
              onUpdate: 'cascade',
            });  
  },
  down: async (queryInterface, Sequelize) => {
   // return queryInterface.removeColumn('dogs', 'foreign Key');        
  }
};
