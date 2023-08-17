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

const createTeacher = async (req, res) => {
  const teacher = req.body;
  try {
    const newTeacher = await teacherService.createTeacher(teacher);
    res.json(newTeacher);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear al docente' });
  }
};

const updateTeacher = async (req, res) => {
  const teacherId = req.params.id;
  const teacher = req.body;
  try {
    const updatedTeacher = await teacherService.updateTeacher(teacherId, teacher);
    res.json(updatedTeacher);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar al docente' });
  }
};

const deleteTeacher = async (req, res) => {
  const teacherId = req.params.id;
  try {
    const deletedTeacherCount = await teacherService.deleteTeacher(teacherId);
    res.json({ message: 'Profesor eliminado exitosamente', count: deletedTeacherCount });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el profesor' });
  }
};

module.exports = {
  getAllTeachers,
  getTeachersById,
  createTeacher,
  updateTeacher,
  deleteTeacher,
};
