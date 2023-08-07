'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('Volunteers',{
      id_volunteer:{
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      lastname:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      dni:{
        type:Sequelize.BIGINT,
        allowNull: false,
      },
      email:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      password: {
        type:Sequelize.STRING,
        allowNull: false,
      },
      address:{
        type:Sequelize.STRING,
        allowNull: false,
      },
      points:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 0
      },
      phone:{
        type: Sequelize.STRING,
        allowNull:false
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Volunteer');
  }
};
