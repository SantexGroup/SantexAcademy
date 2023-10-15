const { Course, User } = require('../models');
const { Op } = require('sequelize');

const ExtensiveCourse = Course.scope('defaultScope', 'withTeachersAndCategories');

const createCourse = async (course) => {
    try {
        return await Course.create({
            name: course.name,
            description: course.description,
            image: course.image,
            durationHours: course.durationHours
        });
    } catch (err) {
        console.error('Error when creating course.', err.message);
        throw err;
    }
};

const getCourses = async () => {
    try {
        return await ExtensiveCourse.findAll();
    } catch (err) {
        console.error('Error when fetching courses.', err.message);
        throw err;
    }
};

const getCourse = async (id) => {
    try {
        return await ExtensiveCourse.findByPk(id);
    } catch (err) {
        console.error('Error when fetching course.', err.message);
        throw err;
    }
};

const updateCourse = async (id, newValues) => {
    try {
        await Course.update({
            name: newValues.name,
            description: newValues.description,
            image: newValues.image,
            durationHours: newValues.durationHours
        }, {
            where: { id }
        });
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
        let options = { where: {} };
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
        // Comprueba que el curso y el usuario existan
        const course = await Course.findByPk(courseId);
        const user = await User.findByPk(userId);
        if (!course || !user) return null;

        // Comprueba que el usuario no esté en el curso
        if ( await course.hasUser(user) ) {
            throw new Error('The user is already in the course.');
        }

        // Agrega el usuario al curso
        await course.addUser(userId);

        // Devuelve el usuario con la asociación creada
        return ( await course.getUsers({ where: { id: userId } }) )[0];
    } catch (err) {
        console.error('Error when adding user to course.', err.message);
        throw err;
    }
};

const removeUser = async (courseId, userId) => {
    try {
        const course = await Course.findByPk(courseId);
        return await course?.removeUser(userId);
    } catch (err) {
        console.error('Error when removing user from course.', err.message);
        throw err;
    }
};

const searchCourses = async (name, by) => {
    try {
      // Define una variable para almacenar las condiciones de búsqueda
      const searchConditions = {};
  
      // Verifica si se proporciona el nombre y agrega la condición correspondiente
      if (name) {
        searchConditions.name = {
          [Op.like]: `%${name}%`, // Esto buscará nombres que contengan el valor proporcionado
        };
      }
  
      // Verifica el valor de 'by' y agrega la condición correspondiente
      if (by === 'byProfesor') {
        // Agrega la condición para buscar por profesor si es necesario
      }
  
      // Utiliza Sequelize para buscar cursos basados en las condiciones de búsqueda
      const courses = await Course.findAll({
        where: searchConditions,
      });
  
      return courses;
    } catch (err) {
      console.error('Error al buscar cursos:', err.message);
      throw err;
    }
  };

module.exports = { createCourse, getCourses, getCourse, updateCourse, deleteCourse, getUsers, addUser, removeUser, searchCourses };