const { UserProvider } = require('../providers');

const getUserById = async (id) => UserProvider.getUserById(id);

const getUserByEmail = async (option) => UserProvider.getUserByEmail(option);

const getUsers = async () => UserProvider.getUsers();

const createUser = async (user) => UserProvider.createUser(user);

const updateUser = async (id, user) => UserProvider.updateUser(id, user);

const patchUser = async (id, newPassword) => UserProvider.patchUser(id, newPassword);

const deleteUser = async (id) => UserProvider.deleteUser(id);

const inscription = async (idCourse, idUser) => UserProvider.inscription(idCourse, idUser);
/* eslint-disable */
const removeCourseRegistration = async (idCourse, idUser) => 
UserProvider.removeCourseRegistration(idCourse, idUser);
/* eslint-enable */
const validateCode = async (code, email) => UserProvider.validateCode(code, email);

const createCode = async (email) => UserProvider.createCode(email);

const patchAdmins = async (userId) => UserProvider.patchAdmins(userId);

const deleteAdmins = async (userId) => UserProvider.deleteAdmins(userId);

module.exports = {
  getUserById,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  patchUser,
  getUserByEmail,
  inscription,
  removeCourseRegistration,
  validateCode,
  createCode,
  patchAdmins,
  deleteAdmins,
};
