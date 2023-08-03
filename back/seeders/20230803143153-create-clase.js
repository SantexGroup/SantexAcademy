'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('clases', [{
       title: 'Introduccion',
       description: "Automatic context help is disabled. Use the toolbar to manually get help for the current caret position or to toggle automatic help.",
       date: new Date("2023-9-10"),
       days:"Jueves",
       hour: 18,
       courseId:2
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clases', null, {});
  }
};
