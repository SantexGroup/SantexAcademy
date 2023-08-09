const db = require('../models/index');

const userCreate = async (user) => {
  // falta verificar si el usuario ya existe (usuario ya registrado)
  try {
    const newUser = await db.User.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    });
    return newUser;
  } catch (error) {
    console.error('Unable to create a user. Error: ', error);
    throw error;
  }
};

const findUser = async (email) => {
  try {
    const userFound = await db.User.findOne({ where: { email } });
    return userFound;
  } catch (error) {
    console.error('I can not find the user. Error: ', error);
    throw error;
  }
};

const find = async () => {
  try {
    const userFound = await db.User.findAll();
    return userFound;
  } catch (error) {
    console.error('I can not find the user. Error: ', error);
    throw error;
  }
};

const modifyUser = async (email, newUser) => {
  try {
    // const { firstName, lastName, email, password } = newUser;
    const updatedUser = await db.User.update(newUser, { where: { email } });
    return updatedUser;
  } catch (error) {
    console.error('Error al actualizar el usuario: ', error);
    throw error;
  }
};

const deleteUser = async (email) => {
  try {
    const deletedUser = await db.User.destroy({ where: { email } });
    return deletedUser;
  } catch (error) {
    console.error(`Error deleting the User with id: ${email}. Error detail: `, error);
    throw error;
  }
};

module.exports = {
  userCreate,
  findUser,
  find,
  modifyUser,
  deleteUser,
};
