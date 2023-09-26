'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const datosUsuarios = [
      {
        nombre: 'admin',
        email: 'admin@example.com',
        contrasenia: '123456',      // Aqui se debe encriptar (hashed  clave) la contraseña
        id_rol: 1,
        descripcion_rol: 'Administrador',
        fecha_creacion: new Date(),
        fecha_modificacion: new Date()
      }
    ];

    return queryInterface.bulkInsert('usuarios', datosUsuarios, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuarios', null, {});
  }
};