const bcrypt = require('bcrypt');
const faker = require('faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const hashedPassword = await bcrypt.hash('admin123', 10);

    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Administrador',
        lastName: 'ApellidoDelAdministrador',
        userName: 'mixx',
        password: hashedPassword,
        email: 'admin@gmail.com',
        rol: 'Admin',
        phone: faker.phone.phoneNumber(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', { userName: 'mixx' });
  },
};
