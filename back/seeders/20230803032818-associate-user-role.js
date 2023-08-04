/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
const { faker } = require('@faker-js/faker');
const { User, Role } = require('../models/index');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const allRoles = await Role.findAll();
    console.log(allRoles);
    return Promise.all([
      User.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: 'leomessi212',
        createdAt: new Date(),
        updatedAt: new Date(),
      }).then((user) => {
        user.addRole(allRoles[0].id);
      }),
      User.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: 'leomessi212',
        createdAt: new Date(),
        updatedAt: new Date(),
      }).then((user) => {
        user.addRole(allRoles[2].id);
      }),
      User.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: 'leomessi212',
        createdAt: new Date(),
        updatedAt: new Date(),
      }).then((user) => {
        user.addRole(allRoles[1].id);
      }),
      User.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: 'leomessi212',
        createdAt: new Date(),
        updatedAt: new Date(),
      }).then((user) => {
        user.addRole(allRoles[0].id);
      }),
      User.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: 'leomessi212',
        createdAt: new Date(),
        updatedAt: new Date(),
      }).then((user) => {
        user.addRole(allRoles[1].id);
      }),
      User.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: 'leomessi212',
        createdAt: new Date(),
        updatedAt: new Date(),
      }).then((user) => {
        user.addRole(allRoles[1].id);
      }),
      User.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: 'leomessi212',
        createdAt: new Date(),
        updatedAt: new Date(),
      }).then((user) => {
        user.addRole(allRoles[1].id);
      }),
      User.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: 'leomessi212',
        createdAt: new Date(),
        updatedAt: new Date(),
      }).then((user) => {
        user.addRole(allRoles[0].id);
        user.addRole(allRoles[2].id);
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User_Roles', null, {});
  },
};
