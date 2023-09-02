'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Obtener todos los estudiantes y cohortes disponibles
    const students = await queryInterface.sequelize.query('SELECT id FROM Students;');
    const cohorts = await queryInterface.sequelize.query('SELECT id FROM Cohorts;');

    const studentIds = students[0].map((student) => student.id);
    const cohortIds = cohorts[0].map((cohort) => cohort.id);

    // Construir un array de objetos de asignación aleatoria
    const assignments = [];

    studentIds.forEach((studentId) => {
      const randomCohortId = cohortIds[Math.floor(Math.random() * cohortIds.length)];
      assignments.push({
        studentId,
        cohortId: randomCohortId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });

    // Insertar todas las asignaciones en un solo bulkInsert
    await queryInterface.bulkInsert('CohortStudents', assignments);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Students', null, {});
  },
};
