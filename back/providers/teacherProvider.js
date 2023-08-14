const { Teacher } = require('../models');

const getAllTeachers = async () => {
  try {
    const teachers = await Teacher.findAll();
    return teachers;
  } catch (error) {
    throw new Error('Error al obtener los docentes');
  }
};

const getTeachersById = async (id) => {
  try {
    const teacher = await Teacher.findByPk(id);
    return teacher;
  } catch (error) {
    throw new Error('Error al obtener el docente');
  }
};
// Faltan las funciones de create, update y delete similar a CourseProvider

module.exports = {
  getAllTeachers,
  getTeachersById,
  // Faltan las demás funciones
};
