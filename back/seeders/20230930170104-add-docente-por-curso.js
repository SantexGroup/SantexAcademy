'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Inserta registros de especialidades en la tabla Especialidad
    return queryInterface.bulkInsert('DocentePorCursos', [
      {
        iddocente: 1,
        idcurso: 1,
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
          // Agrega más registros según sea necesario
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Elimina los registros de especialidades
    return queryInterface.bulkDelete('DocentePorCurso', null, {});
  }
};
