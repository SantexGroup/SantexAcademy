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
      id
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
    let id = req.params.id;
    let {
      email,
      phonenumber,
      name,
      lastname
    } = req.body;
    
    const userData = await userService.edit(id, {
      email,
      phonenumber,
      name,
      lastname
    });
    res.json(userData);
  } catch (error) {
    next(error);
  }
}
 
async function createUser(req, res, next) {
  try{
    const { username, password } = req.body;
    const created = await userService.newUser(username, password);
    if(created){
      return res
        .status(201)
        .json({ success: true, message: "El ha sido creado correctamente" });
    }
  }
  catch (error) {
    next(error);
  }
    //return res.status(201).json({success: true, user });
}

module.exports = {
  login,
  userInfo,
  editUser,
  createUser
};
