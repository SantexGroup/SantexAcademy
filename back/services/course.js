const { CourseProvider } = require('../providers');

const getAllCourses = async () => {
  const allCourses = await CourseProvider.getAllCourses();
  return allCourses;
};

module.exports = {
  getAllCourses,
};
