const {CourseProvider} = require("../providers");

const getCourse= async (id) => {
  return await CourseProvider.getCourseById(id);
};

const getCourses = async () => {
  return await CourseProvider.getCourses();
};

const createCategory = async (options) => {
    return await CourseProvider.createCourse(options);
  };

const createCourse = async (options) => {
  return await CourseProvider.createCourse(options);
};

const updateCourse = async (id, options) => {
  return await CourseProvider.updateCourse(id, options);
};

const deleteCourse = async (id) => {
  return await CourseProvider.deleteCourse(id);
};

//exports
module.exports = { createCourse, createCategory ,deleteCourse, getCourse, getCourses, updateCourse };
