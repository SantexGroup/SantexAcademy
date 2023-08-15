const { courseDetailProvider } = require('../providers');

const getAllCoursesDetails = async () => {
  try {
    const coursesDetails = await courseDetailProvider.getAllCoursesDetails();
    return coursesDetails;
  } catch (error) {
    throw new Error('Error al obtener los detalles de los cursos');
  }
};

module.exports = {
  getAllCoursesDetails,
};
