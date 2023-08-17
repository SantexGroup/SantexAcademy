const { Course } = require('../models');

const getAllCourses = async () => {
  try {
    const courses = await Course.findAll();
    return courses;
  } catch (error) {
    throw new Error('Error al obtener los cursos');
  }
};

const getCourseById = async (id) => {
  try {
    const course = await Course.findByPk(id);
    return course;
  } catch (error) {
    throw new Error('Error al obtener el curso');
  }
};

const createCourse = async (course) => {
  try {
    const createdCourse = await Course.create(course);
    return createdCourse;
  } catch (error) {
    throw new Error('Error al crear el curso');
  }
};

const deleteCourse = async (id) => {
  try {
    const deletedCourseCount = await Course.destroy({
      where: {
        id,
      },
    });
    return deletedCourseCount;
  } catch (error) {
    throw new Error('Error al eliminar el curso');
  }
};

const updateCourse = async (id, course) => {
  try {
    const [updatedCourseCount] = await Course.update(course, {
      where: {
        id,
      },
    });
    return updatedCourseCount;
  } catch (error) {
    throw new Error('Error al actualizar el curso');
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  deleteCourse,
  updateCourse,
};
