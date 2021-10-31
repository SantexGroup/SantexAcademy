const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models").user;
const UserNotFoundException = require("../exceptions/userNotFound.exception");

function createToken(id) {
  const expirationTime = parseInt(process.env.JWT_EXPIRATION_TOKEN, 10);
  return jwt.sign({ userId: id }, process.env.JWT_ENCRYPTION_TOKEN, {
    expiresIn: expirationTime,
  });
}
async function login(username, password) {
  const user = await userModel.findOne({ where: { username } });
  if (user) {
    const isCorrect = bcrypt.compareSync(password, user.password);
    if (isCorrect) {
      const token = createToken(user.id);
      delete user.dataValues.password;
      return { user, token };
    }
  }
  throw new InvalidPasswordException();
}

async function getOne(data) {
  return userModel.findOne({
    where: data,
    attributes: { exclude: ["password"] },
  });
}

/**
 * 
 * @param {*} id 
 * @param {*} userData 

async function edit(id, userData) {
  const user = await userModel.findByPk(id, {
    attributes: { exclude: ['password'] }
  });

  if (!!user) {
    if (!!userData.email) {
      user.email = userData.email;
    }

    if (userData.phonenumber) {
      user.phone_number = userData.phonenumber
    }

    if (userData.name) {
      user.name = userData.name;
    }

    if (userData.lastname) {
      user.lastname = userData.lastname;
    }

    user.save();

    return user;
  }
  throw new UserNotFoundException();
}
 */
async function newUser(username, password) {
  const user = await userModel.findOne({ where: { username } });
  if (user) {
    return res
      .status(400)
      .json({ success: false, message: "El nombre de usuario ya existe" });
  }
  password = bcrypt.hashSync(password, 10);
  //const usuario = { username, password };
  //user.password=password;
  user.save();
  return usuario;
}

module.exports = {
  login,
  getOne,
  // edit,
  newUser,
};
