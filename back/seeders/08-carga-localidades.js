// 'use strict';

// /** @type {import('sequelize-cli').Migration} */

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     const datosLocalidades = [
//       {
//         // abreviatura: '',
//         nombre: "Localidad",
//         // prefijo_telefonico: 0,
//         // id_provincia: 0,
//         // nombre_provincia: "",
//         activo: 1,
//         por_defecto: 0,
//         // orden: 0,
//         creado_por: "Sistema",
//         fecha_creacion: new Date(),
//         modificado_por: "Sistema",
//         fecha_modificacion: new Date(),
//       },

//       {
//         // abreviatura: '',
//         nombre: "Localidad",
//         // prefijo_telefonico: 0,
//         // id_provincia: 0,
//         // nombre_provincia: "",
//         activo: 1,
//         por_defecto: 0,
//         // orden: 0,
//         creado_por: "Sistema",
//         fecha_creacion: new Date(),
//         modificado_por: "Sistema",
//         fecha_modificacion: new Date(),
//       }
//     ];

//     return queryInterface.bulkInsert('localidades', datosLocalidades, {});
//   },

//   down: async (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('localidades', null, {});
//   }
// };