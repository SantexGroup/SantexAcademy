'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const datosDescripcionesCorreoElectronico = [
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
        descripcion: 'Casa',
        activo: 1,
        por_defecto: 0,
        // orden: 3,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        descripcion: 'Trabajo',
        activo: 1,
        por_defecto: 0,
        // orden: 3,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      }
    ];

    return queryInterface.bulkInsert('descripciones_correo_electronico', datosDescripcionesCorreoElectronico, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('descripciones_correo_electronico', null, {});
  }
};