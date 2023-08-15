const { courseDetail } = require('../models');

const getAllCoursesDetails = async () => {
  try {
    const coursesDetails = await courseDetail.findAll();
    return coursesDetails;
  } catch (error) {
    throw new Error('Error al obtener los detalles de los cursos');
  }
};

const createCourseDetail = async (req) => {
  try {
    const coursesDetails = await courseDetail.create(req);
    return coursesDetails;
  } catch (error) {
    throw new Error('Error al crear el detalle del curso');
  }
};

const updateCourseDetail = async (id, body) => {
  console.log(id, body);
  try {
    const coursesDetails = await courseDetail.update(body, {
      where: {
        id,
      },
    });
    return coursesDetails;
  } catch (error) {
    throw new Error('Error al actualizar el detalle del curso');
  }
};

module.exports = {
  getAllCoursesDetails,
  createCourseDetail,
  updateCourseDetail,
};
