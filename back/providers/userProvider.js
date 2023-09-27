const bcrypt = require('bcrypt');
const { User, Registered, Course } = require('../models');

const createUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    throw ('Error:', error);
  }
};
const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Registered,
          include: [Course],
        },
      ],
    });
    return user;
  } catch (error) {
    throw ('Error:', error);
  }
};
const getUserByEmail = async (option) => {
  try {
    const user = await User.findOne({
      where: { email: option },
    });
    return user;
  } catch (error) {
    throw ('Error:', error);
  }
};

const getUsers = async () => {
  try {
    const options = {
      include: [{ all: true }],
      attributes: { exclude: ['password'] },
    };
    const users = await User.findAll(options);
    return users;
  } catch (error) {
    throw ('Error:', error);
  }
};

const updateUser = async (userId, userOptions) => {
  try {
    await getUserById(userId);
    await User.update(userOptions, { where: { id: userId } });
    return getUserById(userId);
  } catch (error) {
    throw ('Error:', error);
  }
};
const patchUser = async (userId, newPassword) => {
  try {
    const user = await User.findByPk(userId);
    user.password = newPassword.password;
    await user.save();
    return getUserById(userId);
  } catch (error) {
    throw ('Error:', error);
  }
};
const deleteUser = async (userId) => {
  try {
    return await User.update(
      { active: false },
      { where: { id: userId, active: true } },
    );
  } catch (error) {
    throw ('Error:', error);
  }
};
const validateUser = async (email, password) => {
  const userData = await getUserByEmail(email);
  const hashedPassword = userData.password;
  const match = await bcrypt.compare(password, hashedPassword);
  if (match) {
    try {
      const user = await User.findOne({
        where: { email, active: true },
      });
      if (user) {
        return user;
      }
      return false;
    } catch (error) {
      throw ('Error:', error);
    }
  } else {
    return false;
  }
};
const inscription = async (idCourse, idUser) => {
  try {
    const relation = await Registered.create({
      idUser,
      idCourse,
    });
    return relation;
  } catch (error) {
    throw ('Error:', error);
  }
};

module.exports = {
  createUser,
  deleteUser,
  getUserById,
  getUserByEmail,
  getUsers,
  updateUser,
  patchUser,
  validateUser,
  inscription,
};
