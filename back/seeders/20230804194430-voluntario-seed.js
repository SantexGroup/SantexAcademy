'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('voluntario', [
      {
        id_voluntario: 1,
        email: 'voluntario1@example.com',
        fullname: 'Voluntario Uno',
        id_rol: 2,
        nombre_rol: 'Voluntario',
        password: 'password1',
        telefono: '1234567890'
      },
      {
        id_voluntario: 2,
        email: 'voluntario2@example.com',
        fullname: 'Voluntario Dos',
        id_rol: 2,
        nombre_rol: 'Voluntario',
        password: 'password2',
        telefono: '0987654321'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('voluntario', null, {});
  }
};
