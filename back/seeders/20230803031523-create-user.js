/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up(queryInterface, Sequelize) {
    const users = [{
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: 'leomessi212',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: 'leomessi212',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: 'leomessi212',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: 'leomessi212',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: 'leomessi212',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: 'leomessi212',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: 'leomessi212',
      createdAt: new Date(),
      updatedAt: new Date(),
    }];
    return queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
