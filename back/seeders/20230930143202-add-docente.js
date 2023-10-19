'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Inserta registros de especialidades en la tabla Especialidad
    return queryInterface.bulkInsert('Docentes', [
      {
        idusuario: 2,
        idespecialidad: 1,
        habilitado: true,
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idusuario: 8,
        idespecialidad: 2,
        habilitado: false,
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
          // Agrega más registros según sea necesario
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Elimina los registros de especialidades
    return queryInterface.bulkDelete('Docente', null, {});
  }
};
