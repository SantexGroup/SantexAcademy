const { courseDetailProvider } = require('../providers');

const getAllCoursesDetails = async () => {
  try {
    const coursesDetails = await courseDetailProvider.getAllCoursesDetails();
    return coursesDetails;
  } catch (error) {
    throw new Error('Error al obtener los detalles de los cursos');
  }
};

const getCourseDetailsById = async (id) => {
  try {
    const courseDetail = await courseDetailProvider.getCourseDetailsById(id);
    return courseDetail;
  } catch (error) {
    throw new Error(`Error al obtener los detalles del curso con el id ${id}`);
  }
};

const createCourseDetail = async (req) => {
  try {
    const courseDetail = await courseDetailProvider.createCourseDetail(req);
    return courseDetail;
  } catch (error) {
    throw new Error('Error al crear el detalle del curso');
  }
};

const updateCourseDetail = async (id, body) => {
  try {
    const courseDetail = await courseDetailProvider.updateCourseDetail(id, body);
    return courseDetail;
  } catch (error) {
    throw new Error('Error al actualizar el detalle del curso');
  }
};

const deleteCourseDetail = async (id) => {
  try {
    const courseDetail = await courseDetailProvider.deleteCourseDetail(id);
    if (courseDetail === 0) {
      throw new Error('Curso no encontrado');
    }
    return courseDetail;
  } catch (error) {
    throw new Error('Error al eliminar el detalle del curso');
  }
};
module.exports = {
  getAllCoursesDetails,
  getCourseDetailsById,
  createCourseDetail,
  updateCourseDetail,
  deleteCourseDetail,
};
