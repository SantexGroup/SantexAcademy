const { Student } = require('../models');

const getAllStudents = async () => {
  try {
    const students = await Student.findAll();
    return students;
  } catch (error) {
    throw new Error('Error al obtener los estudiantes');
  }
};

module.exports = { getAllStudents };
