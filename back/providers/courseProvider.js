const { Course, User } = require('../models');

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
        return await Course.findAll({paranoid: false});//se muestran incluso los eliminados
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

const getUsers = async (id, filterParams) => {
    try {
        let options = {
            where: {},
            paranoid: false // se muestran incluso los eliminados
        };
        if (filterParams.role) options.where.role = filterParams.role;
        const course = await Course.findByPk(id);
        return await course?.getUsers(options);
    } catch (err) {
        console.error("Error when fetching course users.", err.message);
        throw err;
    }
};

const addUser = async (courseId, userId) => {
    try {
        const course = await Course.findByPk(courseId);
        const user = await User.findByPk(userId);
        if (!course || !user) return null;
        const courseHasUser = await course.hasUser(user);
        if (!courseHasUser) await course.addUser(userId);
        return ( await course.getUsers({ where: { id: userId } }) )[0];
    } catch (err) {
        console.error('Error when adding user to course.', err);
        throw err;
    }
};

module.exports = { createCourse, getCourses, getCourse, updateCourse, deleteCourse, getUsers, addUser };