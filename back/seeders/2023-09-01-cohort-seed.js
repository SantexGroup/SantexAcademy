'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cohorts', [
      {
        courseId: 1,
        teacherId: 1, // Reemplaza con el ID válido de un profesor existente
        startDate: '2023-09-01',
        finishDate: '2023-12-31',
        countStudents: 10,
        price: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        courseId: 2,
        teacherId: 1, // Reemplaza con el ID válido de un profesor existente
        startDate: '2023-09-01',
        finishDate: '2023-12-31',
        countStudents: 20,
        price: 2000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        courseId: 3,
        teacherId: 1, // Reemplaza con el ID válido de un profesor existente
        startDate: '2023-09-01',
        finishDate: '2023-12-31',
        countStudents: 30,
        price: 3000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cohorts', null, {});
  },
};
