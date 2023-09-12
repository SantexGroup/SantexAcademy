'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'verificationCode', {
      type: Sequelize.BOOLEAN,
      defaultValue: false, 
    });
  },

  down: async (queryInterface, Sequelize) => {
    
  },
};
