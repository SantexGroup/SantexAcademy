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

const findUser = async (id) => {
  try {
    const userFound = await db.User.findOne({ where: { id } });
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

module.exports = {
  userCreate,
  findUser,
  find,
  modifyUser,
  deleteUser,
};
