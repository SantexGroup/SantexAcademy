'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [
      {
        id_rol: 1,
        nombre_rol: 'Visitante',
      },
      {
        id_rol: 2,
        nombre_rol: 'Voluntario',
      },
      {
        id_rol: 3,
        nombre_rol: 'Coordinador',
      },
      {
        id_rol: 4,
        nombre_rol: 'Administrador',
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
