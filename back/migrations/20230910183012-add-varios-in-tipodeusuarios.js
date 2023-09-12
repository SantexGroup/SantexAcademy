'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoDeUsuarios', [
      {
        id: 1,
        nombre: 'Administrador',
        descripcion: 'Administrador',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        nombre: 'Alumno',
        descripcion: 'Alumno',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        nombre: 'Docente',
        descripcion: 'Docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoDeUsuarios', null, {});
  },
};