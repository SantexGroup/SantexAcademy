const { cohortProvider } = require('../providers');

const enrollStudentInCourse = (courseId, studentId) => {
  try {
    const enrolledStudent = cohortProvider.enrollStudentInCourse(courseId, studentId);
    return enrolledStudent;
  } catch (error) {
    throw new Error('Error al matricular al estudiante');
  }
};

module.exports = {
  enrollStudentInCourse,
};
