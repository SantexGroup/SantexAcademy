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

module.exports = {
  getAllStudents,
  getStudentById,
};
