const { StudentProvider } = require('../providers');

const getAllStudents = async () => {
  try {
    const students = await StudentProvider.getAllStudents();
    return students;
  } catch (error) {
    throw new Error('Error al obtener los estudiantes');
  }
};

const getStudentById = async (id) => {
  try {
    const student = await StudentProvider.getStudentById(id);
    return student;
  } catch (error) {
    throw new Error('Error al obtener el estudiante');
  }
};

const createStudent = async (student) => {
  try {
    const newStudent = await StudentProvider.createStudent(student);
    return newStudent;
  } catch (error) {
    throw new Error('Error al crear el estudiante');
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
};
