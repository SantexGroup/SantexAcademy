const crypto = require('crypto');

const { Course } = require('../models');
// eslint-disable-next-line import/order

const newCourseProv = async (course) => {
  const {
    courseName,
    courseStartDate,
    courseEndDate,
  } = course;

  // eslint-disable-next-line no-useless-catch
  try {
    // eslint-disable-next-line no-unused-vars
    const newCourse = await Course.create({
      // eslint-disable-next-line no-undef
      id: crypto.randomUUID(),
      courseName,
      courseStartDate,
      courseEndDate,
    });
    return newCourse;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  newCourseProv,
};
