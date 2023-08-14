const { teacherProvider } = require('../providers');

const getAllTeachers = async () => {
  try {
    const teachers = await teacherProvider.getAllTeachers();
    return teachers;
  } catch (error) {
    throw new Error('Error en el servicio al obtener los docentes');
  }
};

const getTeachersById = async (id) => {
  try {
    const teachers = await teacherProvider.getTeachersById(id);
    return teachers;
  } catch (error) {
    throw new Error('Error en el servicio al obtener el docente');
  }
};
// Faltan las funciones de create, update y delete

module.exports = {
  getAllTeachers,
  getTeachersById,
  // Falta aquí las demás funciones
};
