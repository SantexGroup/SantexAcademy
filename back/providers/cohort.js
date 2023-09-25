const { Cohort } = require('../models');
const { Course } = require('../models');
const { Student } = require('../models');
const { Teacher } = require('../models');

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
          model: Teacher,
        },
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

const getCohortById = async (cohortId) => {
  try {
    const cohort = await Cohort.findByPk(cohortId, {
      include: [
        {
          model: Teacher,
        },
        {
          model: Course,
        },
        {
          model: Student,
        },
      ],
    });

    if (cohort === null) {
      throw new Error('Cohort no encontrada');
    }
    return cohort;
  } catch (error) {
    throw new Error('Error al obtener la cohorte');
  }
};

module.exports = {
  enrollStudentInCourse,
  getAllCohorts,
  getCohortById,
};
