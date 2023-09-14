'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Cursos', [
      {
        nombre: 'NodeJs',
        descripcion: 'Javascript del lado del servidor',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
        duracion: 60,
        capacidad: 30,
        idnivel: 1,
        requisitos: 'Javascript básico',
        habilitado: true,
        fechaInicio: new Date(),
        fechafin: new Date(),
        idusuarioalta: 1,
        estado: true,
        idusuariomodificacion: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Angular',
        descripcion: 'Framework Javascript de Google',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
        duracion: 60,
        capacidad: 30,
        idnivel: 1,
        requisitos: 'Javascript básico',
        habilitado: true,
        fechaInicio: new Date(),
        fechafin: new Date(),
        idusuarioalta: 1,
        estado: true,
        idusuariomodificacion: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Cursos', null, {});
  }
};
