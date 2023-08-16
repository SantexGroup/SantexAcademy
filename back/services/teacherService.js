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

const createTeacher = async (teacher) => {
  try {
    const newTeacher = await teacherProvider.createTeacher(teacher);
    return newTeacher;
  } catch (error) {
    throw new Error('Error en el servicio al crear el docente');
  }
};

const updateTeacher = async (id, teacher) => {
  try {
    const updatedTeacher = await teacherProvider.updateTeacher(id, teacher);
    return updatedTeacher;
  } catch (error) {
    throw new Error('Error en el servicio al actualizar el docente');
  }
};
// Faltan las funciones y delete

module.exports = {
  getAllTeachers,
  getTeachersById,
  createTeacher,
  updateTeacher,
  // Falta aquí las demás funciones
};
