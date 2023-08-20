const { userService } = require("../services");


const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }

}

//Se pasan req.query y req.body por que son los parametros que se pasan por la url y por el body
const getUsersByCriteria = async (req, res) => {
  try {
    const queryOptions = req.query;
    const bodyOptions = req.body;
    const organizations = await userService.getUsersByCriteria(queryOptions, bodyOptions);
    res.json(organizations);
  }catch (err) {
    res.status(500).json({ action: "getUserByCriteria", error: err.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.updateUserById(id, req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ action: "updateUserById", error: err.message });
  }

}

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.deleteUserById(id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ action: "deleteUserById", error: err.message });
  }


}




module.exports = { createUser, getUsersByCriteria, updateUserById, deleteUserById } 