'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Teachers', [
      {
        firstName: 'John',
        lastName: 'Doe',
        dni: 123456789,
        address: '123 Main St',
        country: 'USA',
        state: 'California',
        celNumber: '123-456-7890',
        email: 'john@example.com',
        specialty: 'Computer Science',
        birthDate: '1990-05-15',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        dni: 987654321,
        address: '456 Elm St',
        country: 'USA',
        state: 'New York',
        celNumber: '987-654-3210',
        email: 'jane@example.com',
        specialty: 'Mathematics',
        birthDate: '1985-08-22',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Michael',
        lastName: 'Johnson',
        dni: 456789123,
        address: '789 Oak St',
        country: 'USA',
        state: 'Texas',
        celNumber: '456-789-1230',
        email: 'michael@example.com',
        specialty: 'Physics',
        birthDate: '1988-02-10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ... Agregar más datos aquí ...
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Teachers', null, {});
  }
};
