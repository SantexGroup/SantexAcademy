const { cohortService } = require('../services');

const enrollStudentInCourse = async (req, res) => {
  const { courseId, studentId } = req.body;

  try {
    const cohort = await cohortService.enrollStudentInCourse({ courseId, studentId });
    return res.status(201).json({ message: 'Estudiante inscripto satisfactioriamente', cohort });
  } catch (error) {
    return res.status(500).json({ message: 'Error al asignar un curso al estudiante', error: error.message });
  }
};

const getAllCohorts = async (req, res) => {
  try {
    const cohorts = await cohortService.getAllCohorts();
    return res.status(200).json(cohorts);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener las cohortes' });
  }
};

const getCohortById = async (req, res) => {
  const cohortId = req.params.id;
  try {
    const cohort = await cohortService.getCohortById(cohortId);
    return res.status(200).json(cohort);
  } catch (error) {
    return res.status(404).json({ error: 'Cohorte no encontrada' });
  }
};

module.exports = {
  enrollStudentInCourse,
  getAllCohorts,
  getCohortById,
};
