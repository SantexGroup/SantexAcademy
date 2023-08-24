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

const updateTeacher = async (id, teacher) => {
  try {
    const [updatedTeacherCount] = await Teacher.update(teacher, {
      where: {
        id,
      },
    });
    return updatedTeacherCount;
  } catch (error) {
    throw new Error('Error al actualizar profesor');
  }
};

const deleteTeacher = async (id) => {
  try {
    const deletedTeacherCount = await Teacher.destroy({
      where: {
        id,
      },
    });
    return deletedTeacherCount;
  } catch (error) {
    throw new Error('Error al eliminar al docente');
  }
};

module.exports = {
  getAllTeachers,
  getTeachersById,
  createTeacher,
  updateTeacher,
  deleteTeacher,
};
