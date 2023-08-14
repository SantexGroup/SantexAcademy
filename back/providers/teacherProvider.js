const { Teacher } = require('../models');

const getAllTeachers = async () => {
  try {
    const teachers = await Teacher.findAll();
    return teachers;
  } catch (error) {
    throw new Error('Error al obtener los docentes');
  }
};

// Faltan las funciones de create, getById, update y delete similar a CourseProvider

module.exports = {
  getAllTeachers,
  // Faltan las demás funciones
};
