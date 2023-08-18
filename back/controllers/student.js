const { studentService } = require('../services');

const getAllStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudents();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los estudiantes' });
  }
};

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await studentService.getStudentById(id);
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el estudiante' });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
};
