'use strict';

// ESTO ES UNA MIGRACION PARA ELIMINAR LA COLUMNA "idFotos" DE LA TABLA "Products"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.removeColumn('Products', 'idFotos', {});
  },

  async down (queryInterface, Sequelize) {
    
  }
};
