/* eslint-disable no-unused-vars */
/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Users', {
      fields: ['nombreusuario'],
      type: 'unique',
      name: 'users_nombreusuario_unique_constraint',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Users', 'users_nombreusuario_unique_constraint');
  },
};
