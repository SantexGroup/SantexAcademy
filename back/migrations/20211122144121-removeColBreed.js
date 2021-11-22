'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([ 
      queryInterface.removeColumn('dogs', 'raza', {  }),
     ]); 

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('dogs', 'raza', { type: Sequelize.DataTypes.STRING, }, {  });
  }
};
