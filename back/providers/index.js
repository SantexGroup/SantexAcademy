const {
  createCourse,
  deleteCourse,
  getCourseById,
  getCourses,
  updateCourse,
} = require('./courseProvider');
const {
  createCategory,
  deleteCategory,
  getCategoryById,
  getCategories,
  updateCategory,
} = require('./categoryProvider');
const {
  createSchedule,
  deleteSchedule,
  getScheduleById,
  getSchedules,
  updateSchedule,
} = require('./scheduleProvider');
const {
  createUser,
  deleteUser,
  getUserById,
  getUserByEmail,
  getUsers,
  updateUser,
  patchUser,
  validateCode,
  createCode,
} = require('./userProvider');

const {
  createAboutUS,
  deleteAboutUS,
  updateAboutUS,
  getAboutUSById,
  getAboutUSs,
} = require('./aboutUSProvider');

const CourseProvider = {
  createCourse,
  deleteCourse,
  getCourseById,
  getCourses,
  updateCourse,
};
const CategoryProvider = {
  createCategory,
  deleteCategory,
  getCategoryById,
  getCategories,
  updateCategory,
};
const ScheduleProvider = {
  createSchedule,
  deleteSchedule,
  getScheduleById,
  getSchedules,
  updateSchedule,
};
const UserProvider = {
  createUser,
  deleteUser,
  getUserById,
  getUserByEmail,
  getUsers,
  updateUser,
  patchUser,
  validateCode,
  createCode,
};

const AboutUSProvider = {
  createAboutUS,
  deleteAboutUS,
  updateAboutUS,
  getAboutUSById,
  getAboutUSs,
};
module.exports = {
  CourseProvider, CategoryProvider, ScheduleProvider, UserProvider, AboutUSProvider,
};
