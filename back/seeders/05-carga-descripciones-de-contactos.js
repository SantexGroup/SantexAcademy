'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const datosdDescripcionesContactos = [
      {
        descripcion: 'Sin descripcion',
        activo: 1,
        por_defecto: 1,
        // orden: 1,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        descripcion: 'Trabajo',
        activo: 1,
        por_defecto: 0,
        // orden: 2,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        descripcion: 'Principal',
        activo: 1,
        por_defecto: 0,
        // orden: 3,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      }
    ];

    return queryInterface.bulkInsert('descripciones_contactos', datosdDescripcionesContactos, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('descripciones_contactos', null, {});
  }
};