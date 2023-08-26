const bcrypt = require('bcrypt');
const faker = require('faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const hashedPassword = await bcrypt.hash('admin123', 10);

    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'nameEncuestador',
        lastName: 'apellidoEncuestador',
        userName: 'mix-x',
        password: hashedPassword,
        email: 'mixx@gmail.com',
        rol: 'Admin',
        phone: faker.phone.phoneNumber(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    // Elimina el usuario administrador
    await queryInterface.bulkDelete('Users', { userName: 'semper_admin' });
  },
};
