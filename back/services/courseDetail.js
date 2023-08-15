const { courseDetailProvider } = require('../providers');

const getAllCoursesDetails = async () => {
  try {
    const coursesDetails = await courseDetailProvider.getAllCoursesDetails();
    return coursesDetails;
  } catch (error) {
    throw new Error('Error al obtener los detalles de los cursos');
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

module.exports = {
  getAllCoursesDetails,
  createCourseDetail,
};
