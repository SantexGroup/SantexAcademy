'use strict';

const { REFERENCES_TABLE_NAME } = require("../helpers/sequelize.helper");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      REFERENCES_TABLE_NAME,
      [
        {
          name: 'Jose',
          lastName: 'Jepeto',
          email: 'jepe@gmail.com',
          phone: '351049696',
          company: 'Zapateria Yepeto',
        },
        {
          name: 'Pinocho',
          lastName: 'Jepeto',
          // email: '1',
          // phone: 'Escritor',
          company: 'Zapateria Yepeto',
        },
        {
          name: 'Iglesia',
          // lastName: '1',
          email: 'iglesia@gmail.com',
          // phone: 'Escritor',
          company: 'Igelesia del pueblo',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(REFERENCES_TABLE_NAME, null, {});  
  }
};
