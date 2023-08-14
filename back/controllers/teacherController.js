const { teacherService } = require('../services');

const getAllTeachers = async (req, res) => {
  try {
    const teachers = await teacherService.getAllTeachers();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los docentes' });
  }
};

const getTeachersById = async (req, res) => {
  const teacherId = req.params.id;
  try {
    const teachers = await teacherService.getTeachersById(teacherId);
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener al docente' });
  }
};

// Falta las funciones de create, update y delete similar a CourseController

module.exports = {
  getAllTeachers,
  getTeachersById,
  // Falta aquí las demás funciones
};
