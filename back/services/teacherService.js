const { teacherProvider } = require('../providers');

const getAllTeachers = async () => {
  try {
    const teachers = await teacherProvider.getAllTeachers();
    return teachers;
  } catch (error) {
    throw new Error('Error en el servicio al obtener los docentes');
  }
};

// Faltan las funciones de create, getById, update y delete similar a CourseService

module.exports = {
  getAllTeachers,
  // Falta aquí las demás funciones
};
