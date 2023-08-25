'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const passwordHash = await bcrypt.hash('password123', 10); // Cambiar a la contraseña deseada

    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        password: passwordHash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Smith',
        password: passwordHash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Michael Johnson',
        password: passwordHash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Emily Brown',
        password: passwordHash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'David Williams',
        password: passwordHash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sophia Jones',
        password: passwordHash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
