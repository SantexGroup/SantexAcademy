'use strict';

const { OPTIONALS_TABLE_NAME } = require('../helpers/sequelize.helper');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      OPTIONALS_TABLE_NAME,
      [
        {
          marital_id: '3',
          sexs_id: '1',
          countries_id: '143',
          // profile: 'Masculino',
          // webPage: 'Masculino',
          // linkedIn: 'Masculino',
          // hobbies: 'Masculino',
          // aptitudes: 'Masculino',
          driverLicense: 'No',
          // aboutMe: 'Masculino',
          // achievements: 'Masculino',
          // address: 'Masculino',
          // zipCode: 'Masculino',
        },      
        {
          marital_id: '3',
          sexs_id: '1',
          countries_id: '143',
          // profile: 'Masculino',
          // webPage: 'Masculino',
          // linkedIn: 'Masculino',
          // hobbies: 'Masculino',
          // aptitudes: 'Masculino',
          driverLicense: 'No',
          // aboutMe: 'Masculino',
          // achievements: 'Masculino',
          // address: 'Masculino',
          // zipCode: 'Masculino',
        },      
        {
          marital_id: '5',
          sexs_id: '1',
          countries_id: '143',
          // profile: 'Masculino',
          // webPage: 'Masculino',
          // linkedIn: 'Masculino',
          // hobbies: 'Masculino',
          // aptitudes: 'Masculino',
          driverLicense: 'Si',
          // aboutMe: 'Masculino',
          // achievements: 'Masculino',
          // address: 'Masculino',
          // zipCode: 'Masculino',
        }      
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(OPTIONALS_TABLE_NAME, null, {});
  },
};
