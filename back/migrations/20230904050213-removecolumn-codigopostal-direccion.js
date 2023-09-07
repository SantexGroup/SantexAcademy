'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.removeColumn('direccions', 'codigoPostal', {});
      console.log('columna codigo postal eliminada');
    } catch{
      console.log('no se pudo eliminar la columna codigo postal');
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
