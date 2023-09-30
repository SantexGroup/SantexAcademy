'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Inserta registros de especialidades en la tabla Especialidad
    return queryInterface.bulkInsert('Especialidads', [
      {
        nombre: 'Especialidad 1',
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Especialidad 2',
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Especialidad 3',
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más registros según sea necesario
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Elimina los registros de especialidades
    return queryInterface.bulkDelete('Especialidad', null, {});
  }
};
