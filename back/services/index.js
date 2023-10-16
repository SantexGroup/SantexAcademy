const {
  createCourse,
  deleteCourse,
  getCourse,
  getCourses,
  updateCourse,
} = require('./courseService');
const {
  createCategory,
  deleteCategory,
  getCategory,
  getCategories,
  updateCategory,
  getCategoriesCourse,
} = require('./categoryService');
const {
  createSchedule,
  deleteSchedule,
  getSchedule,
  getSchedules,
  updateSchedule,
} = require('./scheduleService');
const {
  createUser,
  deleteUser,
  getUserById,
  getUserByEmail,
  getUsers,
  updateUser,
  patchUser,
  inscription,
  removeCourseRegistration,
  validateCode,
  createCode,
  patchAdmins,
  deleteAdmins,
} = require('./userService');

const {
  createAboutUS,
  deleteAboutUS,
  updateAboutUS,
  getAboutUSById,
  getAboutUSs,
} = require('./aboutUSService');
const {
  getRegisters,
} = require('./registerService');

const CourseService = {
  createCourse,
  deleteCourse,
  getCourse,
  getCourses,
  updateCourse,
};
const CategoryService = {
  createCategory,
  deleteCategory,
  getCategory,
  getCategories,
  updateCategory,
  getCategoriesCourse,
};
const ScheduleService = {
  createSchedule,
  deleteSchedule,
  getSchedule,
  getSchedules,
  updateSchedule,
};
const UserService = {
  createUser,
  deleteUser,
  getUserById,
  getUserByEmail,
  getUsers,
  updateUser,
  patchUser,
  inscription,
  removeCourseRegistration,
  validateCode,
  createCode,
  patchAdmins,
  deleteAdmins,
};
const AboutUSService = {
  createAboutUS,
  deleteAboutUS,
  updateAboutUS,
  getAboutUSById,
  getAboutUSs,
};
const RegisterService = {
  getRegisters,
};
module.exports = {
  CourseService, CategoryService, ScheduleService, UserService, AboutUSService, RegisterService,
};
