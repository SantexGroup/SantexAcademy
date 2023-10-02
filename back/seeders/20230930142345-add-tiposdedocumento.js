'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Inserta registros de especialidades en la tabla Especialidad
    return queryInterface.bulkInsert('TipoDeDocumentos', [
      {
        nombre: 'DNI',
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Pasaporte',
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'LI',
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'LE',
        estado: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más registros según sea necesario
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Elimina los registros de especialidades
    return queryInterface.bulkDelete('TipoDeDocumento', null, {});
  }
};
