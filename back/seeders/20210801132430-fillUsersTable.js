/* cSpell: disable */
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users', [
    {
      username: 'example1',
      password: await bcrypt.hash('secret', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'example2',
      password: await bcrypt.hash('secret2', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {
      truncate: true,
      cascade: false,
    });
  },
};
