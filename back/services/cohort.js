const { cohortProvider } = require('../providers');

const enrollStudentInCourse = (courseId, studentId) => {
  try {
    const enrolledStudent = cohortProvider.enrollStudentInCourse(courseId, studentId);
    return enrolledStudent;
  } catch (error) {
    throw new Error('Error al matricular al estudiante');
  }
};

const getAllCohorts = () => {
  try {
    const cohorts = cohortProvider.getAllCohorts();
    return cohorts;
  } catch (error) {
    throw new Error('Error al obtener las cohortes ser');
  }
};

module.exports = {
  enrollStudentInCourse,
  getAllCohorts,
};
