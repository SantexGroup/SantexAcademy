'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
       return queryInterface.addConstraint('dogs', {
          fields: ['id_User'],
          type: 'foreign key',
          name: 'FK_users_dogs', // optional
          references: {
            table: 'users',
            field: 'id',
          },
          onDelete: 'cascade',
          onUpdate: 'cascade',
        });
      },
    
      down: async (queryInterface, Sequelize) => {
       return queryInterface.removeConstraint('dogs', 'foreign Key');
      },
    };