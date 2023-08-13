/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      nombre: 'John',
      apellido: 'Perez',
      nombreUsuario: 'John1',
      contrasena: '1234',
      email: 'lala@gmail.com',
      role: 'admin',
      cel: '1234',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
