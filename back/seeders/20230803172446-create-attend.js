'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
     await queryInterface.bulkInsert('attendance', [{
      userId: 3,
      claseId: 3,
      date: new Date("2023-8-02"),
      status: "ausente",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 4,
      claseId: 3,
      date: new Date("2023-8-02"),
      status: "ausente",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('attendance', null, {});
  }
};
