/* eslint-disable camelcase */
const userService = require('../services/user.services');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await userService.login(username, password);

    res.json(user);
  } catch (error) {
    next(error);
  }
}

async function newUser(req, res, next) {
  try {
    const {
      // eslint-disable-next-line camelcase
      username, password, phone_number, email, name, lastname, address, cuil,
    } = req.body;
    const user = await userService.newUser(
      username, password, phone_number, email, name, lastname, address, cuil,
    );
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}
/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function userInfo(req, res, next) {
  try {
    let id = req.params.id;
    const userData = await userService.getOne({
      id,
    });
    res.json(userData);
  } catch (error) {
    next(error);
  }
}

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function editUser(req, res, next) {
  try {
    const id = req.params.id;
    const {
      email,
      phone_number,
      name,
      lastname,
      cuil,
      address,

    } = req.body;

    const userData = await userService.edit(id, {
      email,
      phone_number,
      name,
      lastname,
      cuil,
      address,
    });
    res.json(userData);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  login,
  newUser,
  userInfo,
  editUser,
};
