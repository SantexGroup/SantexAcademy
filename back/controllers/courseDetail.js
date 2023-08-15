const { courseDetailService } = require('../services');

const getAllCoursesDetails = async (req, res) => {
  try {
    const coursesDetails = await courseDetailService.getAllCoursesDetails();
    res.json(coursesDetails);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los detalles de los cursos' });
  }
};

module.exports = {
  getAllCoursesDetails,
};
