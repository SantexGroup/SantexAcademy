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
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'TipoDeUsuarios',
            // schema: 'schema',
          },
          key: 'id',
        },
        allowNull: false,
      },
      estado: {
        type: Sequelize.CHAR(1),
      },
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