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
} = require('./userProvider');

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
};
module.exports = {
  CourseProvider, CategoryProvider, ScheduleProvider, UserProvider,
};
