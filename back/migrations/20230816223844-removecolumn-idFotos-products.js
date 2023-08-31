'use strict';

// ESTO ES UNA MIGRACION PARA ELIMINAR LA COLUMNA "idFotos" DE LA TABLA "Products"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.removeColumn('Products', 'idFotos', {});
      
    } catch (error) {
      console.log('idFotos no existe');
    }
  },

  async down (queryInterface, Sequelize) {

  }
};
