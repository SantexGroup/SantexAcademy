const { courseDetail } = require('../models');

const getAllCoursesDetails = async () => {
  try {
    const coursesDetails = await courseDetail.findAll();
    return coursesDetails;
  } catch (error) {
    throw new Error('Error al obtener los detalles de los cursos');
  }
};

module.exports = {
  getAllCoursesDetails,
};
