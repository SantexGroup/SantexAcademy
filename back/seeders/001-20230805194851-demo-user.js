/* eslint-disable no-plusplus */
const faker = require('faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const fakeUsers = [];
    const numFakeUsers = 10;

    for (let i = 0; i < numFakeUsers; i++) {
      fakeUsers.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        userName: faker.internet.userName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        rol: faker.random.arrayElement(['admin', 'encuestador']),
        phone: faker.phone.phoneNumber(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('Users', fakeUsers, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
