'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Nivels', [
      {
        id: 1,
        nombre: 'Principiante',
        descripcion: 'Principiante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        nombre: 'Intermedio',
        descripcion: 'Intermedio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        nombre: 'Avanzado',
        descripcion: 'Avanzado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
  
  }
};