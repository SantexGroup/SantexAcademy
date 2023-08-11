/* eslint-disable no-unused-vars */
const { CourseProvider } = require('../providers');

const createCourseServ = async (course) => {
  const newCourse = await CourseProvider.newCourseProv(
    course,
  );

  return newCourse;
};

module.exports = {
  createCourseServ,
};
