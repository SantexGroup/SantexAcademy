const courseProvider = require('../providers/courseProvider');

const createCourse = async (course) => await courseProvider.createCourse(course);
const getCourses = async () => await courseProvider.getCourses();
const getCourse = async (id) => await courseProvider.getCourse(id);
const updateCourse = async (id, newValues) => await courseProvider.updateCourse(id, newValues);
const deleteCourse = async (id) => await courseProvider.deleteCourse(id);
const getUsers = async (id, filterParams) => await courseProvider.getUsers(id, filterParams);
const addUser = async (courseId, userId) => await courseProvider.addUser(courseId, userId);
const removeUser = async (courseId, userId) => await courseProvider.removeUser(courseId, userId);
const searchCourses = async (name, by) => {
    const courses = await courseProvider.searchCourses(name, by);  
    return courses;
  };

module.exports = { createCourse, getCourses, getCourse, updateCourse, deleteCourse, getUsers, addUser, removeUser, searchCourses };