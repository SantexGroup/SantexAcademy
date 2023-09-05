'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const passwordHash = await bcrypt.hash('password123', 10); // Cambiar a la contraseña deseada

    await queryInterface.bulkInsert('Users', [
      {
        userName: 'John Doe',
        password: passwordHash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'Jane Smith',
        password: passwordHash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'Michael Johnson',
        password: passwordHash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'Emily Brown',
        password: passwordHash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'David Williams',
        password: passwordHash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'Sophia Jones',
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
