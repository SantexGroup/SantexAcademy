const { CourseProvider } = require('../providers');

const getAllCourses = async () => {
  const allCourses = await CourseProvider.getAllCourses();
  return allCourses;
};

const getOneCourse = async (courseId) => {
  const getCourse = await CourseProvider.getOneCourse(courseId);
  return getCourse;
};

module.exports = {
  getAllCourses,
  getOneCourse,
};
