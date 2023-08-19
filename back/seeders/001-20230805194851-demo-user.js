/* eslint-disable no-plusplus */
const faker = require('faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const fakeUsers = [];
    const numFakeUsers = 10; // Cantidad de usuarios falsos que deseas crear

    for (let i = 0; i < numFakeUsers; i++) {
      fakeUsers.push({
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        nombreUsuario: faker.internet.userName(),
        contrasena: faker.internet.password(),
        email: faker.internet.email(),
        role: faker.random.arrayElement(['admin', 'encuestador']),
        cel: faker.phone.phoneNumber(),
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
