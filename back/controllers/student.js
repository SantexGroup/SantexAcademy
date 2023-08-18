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

const createStudent = async (req, res) => {
  const studentData = req.body;
  try {
    const createdStudent = await studentService.createStudent(studentData);
    res.status(201).json(createdStudent);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el estudiante' });
  }
};

const updateStudent = async (req, res) => {
  const studentId = req.params.id;
  const studentData = req.body;
  try {
    const updatedStudentCount = await studentService.updateStudent(studentId, studentData);
    res.json({ message: 'Estudiante actualizado exitosamente', count: updatedStudentCount });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el estudiante' });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
};
