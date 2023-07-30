'use strict';

const { USERS_TABLE_NAME } = require("../helpers/sequelize.helper");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      USERS_TABLE_NAME,
      [
        {
          nick: 'Pepillo',
          password: 'false',
          name: 'Pepe',
          lastName: 'Grillo',
          email: 'pepe@gmail.com',
        },
        {
          nick: 'ElYepe',
          password: 'false',
          name: 'Jose',
          lastName: 'Jepeto',
          email: 'jepe@gmail.com',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(USERS_TABLE_NAME, null, {});
  },
};
