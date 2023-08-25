const { Course } = require('../models');

const createCourse = async (course) => {
    try {
        const newCourse = await Course.create(course);
        return await Course.findByPk(newCourse.id);
    } catch (err) {
        console.error('Error when creating course.', err.message);
        throw err;
    }
};

const getCourses = async () => {
    try {
        return await Course.findAll();
    } catch (err) {
        console.error('Error when fetching courses.', err.message);
        throw err;
    }
};

const getCourse = async (id) => {
    try {
        return await Course.findByPk(id);
    } catch (err) {
        console.error('Error when fetching course.', err.message);
        throw err;
    }
};

const updateCourse = async (id, newValues) => {
    try {
        await Course.update(newValues, { where: { id } });
        return await Course.findByPk(id);
    } catch (err) {
        console.error('Error when updating course.', err.message);
        throw err;
    }
};

const deleteCourse = async (id) => {
    try {
        return await Course.destroy({ where: { id } });
    } catch (err) {
        console.error('Error when deleting course.', err.message);
        throw err;
    }
};

module.exports = { createCourse, getCourses, getCourse, updateCourse, deleteCourse };