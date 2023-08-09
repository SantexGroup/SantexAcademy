/* eslint-disable prefer-const */
/* eslint-disable consistent-return */
/* eslint-disable no-useless-catch */
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { User } = require('../models');
const {
  tokenSign,
} = require('../middleware/token');
const { wrongEmailOrPassw, userNotFound } = require('../exceptions/erros');

const newUserProv = async (user) => {
  const {
    firstName,
    lastName,
    email,
    password,
  } = user;

  try {
    const newUser = await User.create({
      id: crypto.randomUUID(),
      firstName,
      lastName,
      email,
      password: await bcrypt.hash(
        password,
        10,
      ),
    });
    if (newUser) {
      // return newUser;
      const token = tokenSign(newUser);
      // const result = {
      //   token: token,
      //   user: newUser,
      // }
      return token;
    }
    // user.password = await bcrypt.hash(
    //   password,
    //   10,
    // );
    // return user;
  } catch (error) {
    throw error;
  }
};

const loginProv = async (user) => {
  try {
    let { email, password } = user;
    const foundUser = await User.findOne({
      where: { email },
    });
    if (foundUser) {
      password = await bcrypt.compare(
        password,
        foundUser.password,
      );

      if (password) {
        const token = tokenSign(foundUser);
        // const result = {
        //   token: token,
        //   user: foundUser,
        // };
        return token;
        // return user;
      }
      throw wrongEmailOrPassw;
    }
    throw userNotFound;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  newUserProv,
  loginProv,
};
