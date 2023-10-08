const courseService = require('../services/courseService');

const createCourse = async (req, res) => {
    try {
        const newCourse = await courseService.createCourse(req.body);
        res.status(201).json(newCourse);
    } catch (err) {
        res.status(500).json({ action: 'Crear curso', message: err.message });
    }
};

const getCourses = async (req, res) => {
    try {
        const courses = await courseService.getCourses();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ action: 'Obtener cursos', message: err.message });
    }
};

const getCourse = async (req, res) => {
    try {
        const course = await courseService.getCourse(req.params.id);
        course ? res.json(course) : res.status(404).end();
    } catch (err) {
        res.status(500).json({ action: 'Obtener curso', message: err.message });
    }
};

const updateCourse = async (req, res) => {
    try {
        const updatedCourse = await courseService.updateCourse(req.params.id, req.body);
        updatedCourse ? res.json(updatedCourse) : res.status(404).end();
    } catch (err) {
        res.status(500).json({ action: 'Modificar curso', message: err.message });
    }
};

const deleteCourse = async (req, res) => {
    try {
        const deleteCourse = await courseService.deleteCourse(req.params.id);
        deleteCourse ? res.status(204).end() : res.status(404).end();
    } catch (err) {
        res.status(500).json({ action: 'Borrar curso', message: err.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const { role } = req.query;
        const users = await courseService.getUsers(req.params.id, { role });
        users ? res.json(users) : res.status(404).end();
    } catch (err) {
        res.status(500).json({ action: 'Obtener usuarios del curso', message: err.message });
    }
};

const addUser = async (req, res) => {
    try {
        const addedUser = await courseService.addUser(req.params.courseId, req.params.userId);
        addedUser ? res.json(addedUser) : res.status(404).end();
    } catch (err) {
        res.status(500).json({ action: 'Agregar usuario a curso', message: err.message });
    }
};

const removeUser = async (req, res) => {
    try {
        const numberOfUsersRemoved = await courseService.removeUser(req.params.courseId, req.params.userId);
        numberOfUsersRemoved ? res.status(204).end() : res.status(404).end();
    } catch (err) {
        res.status(500).json({ action: 'Quitar usuario de curso', message: err.message });
    }
};

const searchCourses = async (req, res) => {
    try {
      const { name, by } = req.query;
      const courses = await courseService.searchCourses(name, by);
      res.json(courses);
    } catch (error) {
      console.error('Error al buscar cursos:', error);
      res.status(500).json({ error: 'Error al buscar cursos' });
    }
  };

module.exports = { createCourse, getCourses, getCourse, updateCourse, deleteCourse, getUsers, addUser, removeUser, searchCourses };