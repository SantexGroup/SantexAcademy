'use strict';

// ESTO ES UNA MIGRACION PARA ELIMINAR LA COLUMNA "idFotos" DE LA TABLA "Products"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.removeColumn('Products', 'idFotos', {});
      console.log('columna idFotos eliminada');
      
    } catch {
      console.log('no se puedo eliminar la columna idFotos');
    }
  },

  async down (queryInterface, Sequelize) {

  }
};
