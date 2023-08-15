/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      firstname: 'natasha',
      lastname: 'quevedo',
      dni: 34355570,
      phone: 351557454,
      adress: 'publica 7',
      email: 'natasha@gmail.com',
      password_id: 1,
      poll_id: 1,
    },
    {
      firstname: 'exe',
      lastname: 'soldano',
      dni: 34352385,
      phone: 351556854,
      adress: 'publica 7',
      email: 'exequiel@gmail.com',
      password_id: 1,
      poll_id: 1,
    }]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users');
  },
};
