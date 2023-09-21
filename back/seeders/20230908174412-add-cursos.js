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
        estado: 'A',
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
        estado: 'A',
        idusuariomodificacion: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'MySql',
        descripcion: 'Base de Datos Open Source',
        imagen: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg',
        duracion: 60,
        capacidad: 30,
        idnivel: 1,
        requisitos: 'Sql basico',
        habilitado: true,
        fechaInicio: new Date(),
        fechafin: new Date(),
        idusuarioalta: 1,
        estado: 'A',
        idusuariomodificacion: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Html5',
        descripcion: 'Lenguaje de marcado para la Web',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg',
        duracion: 60,
        capacidad: 30,
        idnivel: 1,
        requisitos: 'Cero conocimientos',
        habilitado: true,
        fechaInicio: new Date(),
        fechafin: new Date(),
        idusuarioalta: 1,
        estado: 'A',
        idusuariomodificacion: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Css3',
        descripcion: 'Hojas de estilo en cascada',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
        duracion: 60,
        capacidad: 30,
        idnivel: 1,
        requisitos: 'Cero conocimientos',
        habilitado: true,
        fechaInicio: new Date(),
        fechafin: new Date(),
        idusuarioalta: 1,
        estado: 'A',
        idusuariomodificacion: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Javascript',
        descripcion: 'Lenguaje de programacion interpretado',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
        duracion: 60,
        capacidad: 30,
        idnivel: 1,
        requisitos: 'Cero conocimientos',
        habilitado: true,
        fechaInicio: new Date(),
        fechafin: new Date(),
        idusuarioalta: 1,
        estado: 'A',
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
