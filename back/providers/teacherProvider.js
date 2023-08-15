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

const createTeacher = async (teacher) => {
  try {
    const createdTeacher = await Teacher.create(teacher);
    return createdTeacher;
  } catch (error) {
    throw new Error('Error al crear profesor');
  }
};
// Faltan las funciones de update y delete similar a CourseProvider

module.exports = {
  getAllTeachers,
  getTeachersById,
  createTeacher,
  // Faltan las demás funciones
};
