/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('attendance', [
      {
        userId: 1,
        claseId: 1,
        date: new Date('2023-8-02'),
        status: 'ausente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        claseId: 2,
        date: new Date('2023-8-02'),
        status: 'presente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        claseId: 1,
        date: new Date('2023-8-02'),
        status: 'ausente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        claseId: 2,
        date: new Date('2023-8-02'),
        status: 'ausente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        claseId: 1,
        date: new Date('2023-8-02'),
        status: 'presente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        claseId: 2,
        date: new Date('2023-8-02'),
        status: 'presente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('attendance', null, {});
  },
};
