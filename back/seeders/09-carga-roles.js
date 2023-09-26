'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const datosRoles = [
      {
        descripcion: 'Administrador',
        activo: 1,
        por_defecto: 1,
        // orden: 1,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        descripcion: 'Colaborador',
        activo: 1,
        por_defecto: 0,
        // orden: 2,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        descripcion: 'Donante',
        activo: 1,
        por_defecto: 0,
        // orden: 3,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        descripcion: 'Solicitante',
        activo: 1,
        por_defecto: 0,
        // orden: 4,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      }
    ];

    return queryInterface.bulkInsert('roles', datosRoles, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};