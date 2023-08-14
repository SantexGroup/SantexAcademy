const { teacherService } = require('../services');

const getAllTeachers = async (req, res) => {
  try {
    const teachers = await teacherService.getAllTeachers();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los docentes' });
  }
};

// Falta las funciones de create, getById, update y delete similar a CourseController

module.exports = {
  getAllTeachers,
  // Falta aquí las demás funciones
};
