/* eslint-disable no-unused-vars */
const courses = [
  {
    title: 'Cultivo del tomate',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    start_date: new Date('2023-11-20'),
    finish: new Date('2023-12-20'),
    duration: 8,
    maximun_quota: 10,
    current_quota: 0,
    price: 3500,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: 'Crianza de patos',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    start_date: new Date('2023-9-1'),
    finish: new Date('2023-12-10'),
    duration: 20,
    maximun_quota: 10,
    current_quota: 0,
    price: 32500,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: 'Taller de gomeria',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    start_date: new Date('2023-9-1'),
    finish: new Date('2023-12-10'),
    duration: 20,
    maximun_quota: 10,
    current_quota: 0,
    price: 32500,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', courses, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  },
};
