'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Inserta registros de especialidades en la tabla Especialidad
    return queryInterface.bulkInsert('AlumnoNotas', [
      {
        idusuario: 3,
        idcurso: 1,
        nota: 8,
        fechaevidencia:new Date(),
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idusuario: 4,
        idcurso: 1,
        nota: 7,
        fechaevidencia:new Date(),
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idusuario: 5,
        idcurso: 2,
        nota: 6,
        fechaevidencia:new Date(),
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idusuario: 6,
        idcurso: 3,
        nota:4,
        fechaevidencia:new Date(),
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Elimina los registros de especialidades
    return queryInterface.bulkDelete('AlumnoNotas', null, {});
  }
};


