'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const datosDescripcionesDispositivos = [
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
        descripcion: 'Computadora',
        activo: 1,
        por_defecto: 0,
        // orden: 2,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        descripcion: 'Tablet',
        activo: 1,
        por_defecto: 0,
        // orden: 3,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        descripcion: 'Telefono',
        activo: 1,
        por_defecto: 0,
        // orden: 4,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        descripcion: 'Notebook',
        activo: 1,
        por_defecto: 0,
        // orden: 5,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      }
    ];

    return queryInterface.bulkInsert('descripciones_dispositivos', datosDescripcionesDispositivos, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('descripciones_dispositivos', null, {});
  }
};