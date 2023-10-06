const bcrypt = require('bcrypt');
const db = require('../models/index');

const userCreate = async (user) => {
  // falta verificar si el usuario ya existe (usuario ya registrado)
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = await db.User.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: hashedPassword,
      role: user.role,
      specialty: user.specialty
    });
    return newUser;
  } catch (error) {
    console.error('Unable to create a user. Error: ', error);
    throw error;
  }
};

const findUser = async (id) => {
  try {
    const userFound = await db.User.findOne({ where: { id } });
    return userFound;
  } catch (error) {
    console.error('I can not find the user. Error: ', error);
    throw error;
  }
};

const userValidate = async (data) => {
  try {
    const { email } = data;
    const userFound = await db.User.findOne({ where: { email } });

    if (!userFound) {
      return false;
    }
    const passIsCorrect = await bcrypt.compare(data.password, userFound.password);

    return passIsCorrect;
  } catch (error) {
    console.error('I can not find the user. Error: ', error);
    throw error;
  }
};

const find = async (filterParams) => {
  try {
    let options = { where: {} };
    if (filterParams.role) options.where.role = filterParams.role;
    return await db.User.findAll(options);
  } catch (error) {
    console.error('I can not find the user. Error: ', error);
    throw error;
  }
};

const modifyUser = async (id, newUser) => {
  try {
    const updatedUser = await db.User.update(newUser, { where: { id } });
    return updatedUser;
  } catch (error) {
    console.error('Error al actualizar el usuario: ', error);
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await db.User.destroy({ where: { id } });
    return deletedUser;
  } catch (error) {
    console.error(`Error deleting the User with id: ${id}. Error detail: `, error);
    throw error;
  }
};

const getCourses = async (id, filterParams) => {
  try {
      let options = { where: {} };
      if (filterParams.role) options.where.role = filterParams.role;
      const user = await db.User.findByPk(id);
      return await user?.getCourses(options);
  } catch (err) {
      console.error('Error when fetching user courses.', err.message);
      throw err;
  }
};

module.exports = {
  userCreate,
  findUser,
  userValidate,
  find,
  modifyUser,
  deleteUser,
  getCourses,
};
