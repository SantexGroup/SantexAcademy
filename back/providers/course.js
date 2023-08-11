const { Course } = require('../models');

const getAllCourses = async () => {
  try {
    const AllCourses = await Course.findAll();
    return AllCourses;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Error when fetching all courses', err);
    throw err;
  }
};

const getOneCourse = async (courseId) => {
  try {
    const course = await Course.findByPk(courseId);
    return course;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error when fetching Course', error);
    throw error;
  }
};

module.exports = {
  getAllCourses,
  getOneCourse,
};
