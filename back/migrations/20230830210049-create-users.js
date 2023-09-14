// eslint-disable-next-line strict
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      activoactualmente: {
        type: Sequelize.BOOLEAN
      },
      idtipodeusuario: {
        type: Sequelize.INTEGER
      },
<<<<<<< HEAD:back/migrations/20230830210049-create-users.js
      estado: {
        type: Sequelize.STRING
=======
      codeRegister: {
        type: Sequelize.STRING,
        allowNull: false,
        // unique: true,
        defaultValue: 'SinConfirmar',
      },
      verificationCode: {
        type: Sequelize.BOOLEAN,
        allowNull: true, // El código podría ser nulo hasta que se verifique
        defaultValue: false,
>>>>>>> juanjoDiaz:back/migrations/20230830210049-create-user.js
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};