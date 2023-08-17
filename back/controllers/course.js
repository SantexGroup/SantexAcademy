const { courseService } = require('../services');

const getAllCourses = async (req, res) => {
  try {
    const courses = await courseService.getAllCourses();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los cursos' });
  }
};

const getCourseById = async (req, res) => {
  const courseId = req.params.id;
  try {
    const course = await courseService.getCourseById(courseId);
    res.json(course);
  } catch (error) {
    res.status(404).json({ error: 'Curso no encontrado' });
  }
};

const createCourse = async (req, res) => {
  const courseData = req.body;
  try {
    const createdCourse = await courseService.createCourse(courseData);
    res.status(201).json(createdCourse);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el curso' });
  }
};

const deleteCourse = async (req, res) => {
  const courseId = req.params.id;
  try {
    const deletedCourseCount = await courseService.deleteCourse(courseId);
    res.json({ message: 'Curso eliminado exitosamente', count: deletedCourseCount });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el curso' });
  }
};

const updateCourse = async (req, res) => {
  const courseId = req.params.id;
  const courseData = req.body;
  try {
    const updatedCourseCount = await courseService.updateCourse(courseId, courseData);
    res.json({ message: 'Curso actualizado exitosamente', count: updatedCourseCount });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el curso' });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  deleteCourse,
  updateCourse,
};
