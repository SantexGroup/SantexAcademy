'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("clases","courseId",{
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: "courses", // Cambia "Courses" por el nombre real de tu tabla de cursos
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    
    } )
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.removeColumn("clases","courseId",{})
  }
};
