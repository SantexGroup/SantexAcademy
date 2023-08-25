const courseProvider = require('../providers/courseProvider');

const createCourse = async (course) => await courseProvider.createCourse(course);
const getCourses = async () => await courseProvider.getCourses();
const getCourse = async (id) => await courseProvider.getCourse(id);
const updateCourse = async (id, newValues) => await courseProvider.updateCourse(id, newValues);
const deleteCourse = async (id) => await courseProvider.deleteCourse(id);

module.exports = { createCourse, getCourses, getCourse, updateCourse, deleteCourse };