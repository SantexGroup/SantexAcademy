'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const datosEstadosOperaciones = [
      {
        estado: 'Sin operacion',
        // abreviatura: 'xxx' o 'xxxxx',
        activo: 1,
        por_defecto: 1,
        // orden: 1,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        estado: 'Pendiente',
        // abreviatura: 'xxx' o 'xxxxx',
        activo: 1,
        por_defecto: 0,
        // orden: 2,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        estado: 'Completada',
        // abreviatura: 'xxx' o 'xxxxx',
        activo: 1,
        por_defecto: 0,
        // orden: 3,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        estado: 'En Proceso',
        // abreviatura: 'xxx' o 'xxxxx',
        activo: 1,
        por_defecto: 0,
        // orden: 4,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      }
    ];

    return queryInterface.bulkInsert('estados_operaciones', datosEstadosOperaciones, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('estados_operaciones', null, {});
  }
};