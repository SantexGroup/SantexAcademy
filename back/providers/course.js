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
  getAllCourses,
  getOneCourse,
  newCourseProv,
};
