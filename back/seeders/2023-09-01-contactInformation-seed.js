'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ContactInformations', [
      {
        phone_number: '123456789',
        country: 'Country 1',
        state: 'State 1',
        address: 'Address 1',
        email: 'email1@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        phone_number: '987654321',
        country: 'Country 2',
        state: 'State 2',
        address: 'Address 2',
        email: 'email2@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ContactInformations', null, {});
  }
};
