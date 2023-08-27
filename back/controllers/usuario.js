const { userService } = require('../services');

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const role = req.params.role;
    const newUser = await userService.createUser(userData, role);
    res.status(201).json(newUser);
  } catch (err) {
    if (err.message == 'Validation error') {
      res.status(409).json({ action: 'createUser', error: err.message });
    } else {
      res.status(500).json({ action: 'createUser', error: err.message });
    }
  }
};

// Se pasan req.query y req.body por que son los parametros que se pasan por la url y por el body
const getUsersByCriteria = async (req, res) => {
  try {
    const queryOptions = req.query;
    const bodyOptions = req.body;
    const organizations = await userService.getUsersByCriteria(queryOptions, bodyOptions);
    res.json(organizations);
  } catch (err) {
    res.status(500).json({ action: 'getUserByCriteria', error: err.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.updateUserById(id, req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ action: 'updateUserById', error: err.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.deleteUserById(id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ action: 'deleteUserById', error: err.message });
  }
};

module.exports = {
  createUser,
  getUsersByCriteria,
  updateUserById,
  deleteUserById,
};
