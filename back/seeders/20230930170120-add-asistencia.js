'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Inserta registros de especialidades en la tabla Especialidad
    return queryInterface.bulkInsert('Asistencias', [
      {
        idusuario: 3,
        idcurso: 1,
        fecha:new Date(),
        asistio:false,
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idusuario: 4,
        idcurso: 1,
        fecha:new Date(),
        asistio:true,
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idusuario: 5,
        idcurso: 2,
        fecha:new Date(),
        asistio:false,
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idusuario: 6,
        idcurso: 3,
        fecha:new Date(),
        asistio:true,
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Elimina los registros de especialidades
    return queryInterface.bulkDelete('Asistencia', null, {});
  }
};


