const { courseProvider } = require('../providers');

const getAllCourses = async () => {
  try {
    const courses = await courseProvider.getAllCourses();
    return courses;
  } catch (error) {
    throw new Error('Error al obtener los cursos');
  }
};

const getCourseById = async (id) => {
  try {
    const course = await courseProvider.getCourseById(id);
    if (!course) {
      throw new Error('Curso no encontrado');
    }
    return course;
  } catch (error) {
    throw new Error('Error al obtener el curso');
  }
};

const createCourse = async (courseData) => {
  try {
    const createdCourse = await courseProvider.createCourse(courseData);
    return createdCourse;
  } catch (error) {
    throw new Error('Error al crear el curso');
  }
};

const deleteCourse = async (id) => {
  try {
    const deletedCourseCount = await courseProvider.deleteCourse(id);
    if (deletedCourseCount === 0) {
      throw new Error('Curso no encontrado');
    }
    return deletedCourseCount;
  } catch (error) {
    throw new Error('Error al eliminar el curso');
  }
};

const updateCourse = async (id, courseData) => {
  try {
    const updatedCourseCount = await courseProvider.updateCourse(id, courseData);
    if (updatedCourseCount === 0) {
      throw new Error('Curso no encontrado');
    }
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
