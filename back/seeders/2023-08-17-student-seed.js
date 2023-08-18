'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Students', [
      {
        first_name: 'John',
        last_name: 'Doe',
        dni: 123456789,
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        address: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        country: 'USA',
        birth_date: '2000-01-01',
        situation: 'al día',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jane',
        last_name: 'Smith',
        dni: 987654321,
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        address: '456 Elm St',
        city: 'Othertown',
        state: 'NY',
        country: 'USA',
        birth_date: '1998-05-15',
        situation: 'deudor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Michael',
        last_name: 'Johnson',
        dni: 456789123,
        email: 'michael.johnson@example.com',
        phone: '555-123-4567',
        address: '789 Oak Ave',
        city: 'Anothercity',
        state: 'TX',
        country: 'USA',
        birth_date: '1999-09-22',
        situation: 'al día',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Students', null, {});
  },
};
