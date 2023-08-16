const { courseDetailService } = require('../services');

const getAllCoursesDetails = async (req, res) => {
  try {
    const coursesDetails = await courseDetailService.getAllCoursesDetails();
    res.json(coursesDetails);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los detalles de los cursos' });
  }
};

const getCourseDetailsById = async (req, res) => {
  try {
    const courseDetails = await courseDetailService.getCourseDetailsById(req.params.id);
    if (!courseDetails) {
      res.status(404).json({ action: 'courseDetail', error: 'course Detail Not Found' });
    } else {
      res.json(courseDetails);
    }
  } catch (error) {
    res.status(500).json({ error: `Error en el controller al obtener los detalles del curso con el id ${req.params.id}` });
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

const deleteCourseDetail = async (req, res) => {
  try {
    const courseDetail = await courseDetailService.deleteCourseDetail(req.params.id);
    res.json({ message: 'Detalle de Curso eliminado exitosamente', status: courseDetail });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el detalle del curso' });
  }
};

module.exports = {
  getAllCoursesDetails,
  getCourseDetailsById,
  createCourseDetail,
  updateCourseDetail,
  deleteCourseDetail,
};
