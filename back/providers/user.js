/* eslint-disable prefer-const */
/* eslint-disable consistent-return */
/* eslint-disable no-useless-catch */
const bcrypt = require('bcrypt');
const { User } = require('../models');

const newUserProv = async (user) => {
  const {
    firstName,
    lastName,
    email,
    password,
  } = user;

  try {
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: await bcrypt.hash(
        password,
        10,
      ),
    });
    if (newUser) {
      return newUser;
      // //   const token = tokenSign(newUser);
      // // const result = {
      // //   token: token,
      // //   user: newUser,
      // }

    //   return token;
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
    password = await bcrypt.compare(
      password,
      foundUser.password,
    );

    if (password) {
      // const token = tokenSign(foundUser);
      // const result = {
      //   token: token,
      //   user: foundUser,
      // };
      // return token;
      return user;
    }
    return false;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  newUserProv,
  loginProv,
};
