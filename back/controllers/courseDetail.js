const { courseDetailService } = require('../services');

const getAllCoursesDetails = async (req, res) => {
  try {
    const coursesDetails = await courseDetailService.getAllCoursesDetails();
    res.json(coursesDetails);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los detalles de los cursos' });
  }
};

const createCourseDetail = async (req, res) => {
  try {
    const courseDetail = await courseDetailService.createCourseDetail(req.body);
    res.json(courseDetail);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el detalle del curso' });
  }
};

const updateCourseDetail = async (req, res) => {
  try {
    const courseDetail = await courseDetailService.updateCourseDetail(req.params.id, req.body);
    res.json(courseDetail);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el detalle del curso' });
  }
};

module.exports = {
  getAllCoursesDetails,
  createCourseDetail,
  updateCourseDetail,
};
