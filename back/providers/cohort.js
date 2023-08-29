const { Cohort } = require('../models');

const enrollStudentInCourse = async (courseId, studentId) => {
  try {
    const enrolledStudent = await Cohort.create(courseId, studentId);
    return enrolledStudent;
  } catch (error) {
    throw new Error('Error al matricular al estudiante');
  }
};

module.exports = {
  enrollStudentInCourse,
};
