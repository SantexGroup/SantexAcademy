const { Cohort } = require('../models');
const { Course } = require('../models');
const { Student } = require('../models');

const enrollStudentInCourse = async (courseId, studentId) => {
  try {
    const enrolledStudent = await Cohort.create(courseId, studentId);
    return enrolledStudent;
  } catch (error) {
    throw new Error('Error al matricular al estudiante');
  }
};

const getAllCohorts = async () => {
  try {
    const cohorts = await Cohort.findAll({
      include: [
        {
          model: Course,
        },
        {
          model: Student,
        },
      ],
    });
    return cohorts;
  } catch (error) {
    throw new Error('Error al obtener las cohortes');
  }
};

module.exports = {
  enrollStudentInCourse,
  getAllCohorts,
};
