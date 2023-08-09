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

module.exports = {
  getAllCourses,
};
