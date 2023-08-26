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

module.exports = { createCourse, getCourses, getCourse, updateCourse, deleteCourse };