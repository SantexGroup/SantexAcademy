'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const datosEstadosDispositivos = [
      {
        estado: 'Sin estado',
        activo: 1,
        por_defecto: 1,
        // orden: 1,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        estado:'Nuevo',
        activo: 1,
        por_defecto: 0,
        // orden: 2,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        estado: 'Usado',
        activo: 1,
        por_defecto: 0,
        // orden: 3,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        estado: 'Reacondicionado',
        activo: 1,
        por_defecto: 0,
        // orden: 4,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      }
    ];

    return queryInterface.bulkInsert('estados_dispositivos', datosEstadosDispositivos, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('estados_dispositivos', null, {});
  }
};