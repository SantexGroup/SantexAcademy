const { Course } = require('../models');

const newCourseProv = async (course) => {
  const {
    id,
    courseName,
    courseStartDate,
    courseEndDate,
  } = course;

  // eslint-disable-next-line no-useless-catch
  try {
    // eslint-disable-next-line no-unused-vars
    const newCourse = await Course.create({
      // eslint-disable-next-line no-undef
      id,
      courseName,
      courseStartDate,
      courseEndDate,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  newCourseProv,
};
