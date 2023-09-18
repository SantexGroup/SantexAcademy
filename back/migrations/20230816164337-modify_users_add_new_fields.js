'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Users', 'email', {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    });
    await queryInterface.addColumn('Users', 'phone', {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('Users', 'active', {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    });
    await queryInterface.addColumn('Users', 'admin', {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
    await queryInterface.addColumn('Users', 'password', {
      type: DataTypes.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('Users', 'firstname', {
      type: DataTypes.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('Users', 'lastname', {
      type: DataTypes.STRING,
      allowNull: false,
    });
  },
};
