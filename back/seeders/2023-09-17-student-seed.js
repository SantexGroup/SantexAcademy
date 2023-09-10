'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Students', [
      {
        first_name: 'John',
        last_name: 'Doe',
        document_number: 123456789,
        id_contact_information: 1,
        id_user: 1,
        birth_date: '2000-01-01',
        situation: 'al día',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jane',
        last_name: 'Smith',
        document_number: 987654321,
        id_contact_information: 1,
        id_user: 2,
        birth_date: '1998-05-15',
        situation: 'deudor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Michael',
        last_name: 'Johnson',
        document_number: 456789123,
        id_contact_information: 1,
        id_user: 3,
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
