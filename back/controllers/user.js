// eslint-disable-next-line import/no-unresolved
const userService = require('../services/user');

// const { userService } = services;
const getUser = async (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const idUser = req.params.idUser;
  try {
    const user = await userService.getUser(idUser);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  // const result = validationResult(req)
  // if(!result.isEmpty()){
  //     console.log(result)
  //     return  res.status(400).send({errors: result.array})
  // }
  // eslint-disable-next-line object-curly-newline
  const { nombre, apellido, nombreUsuario, contrasena, email, role, cel } = req.body;
  try {
    const newUser = await userService.createUser({
      nombre,
      apellido,
      nombreUsuario,
      contrasena,
      email,
      role,
      cel,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  const { nombre, apellido, role } = req.query;
  try {
    let users;
    if (nombre !== undefined && apellido !== undefined && role !== undefined) {
      // eslint-disable-next-line spaced-comment
      //if(nombre!== undefined) {
      users = await userService.getUsers({
        ...(nombre && { nombre }),
        ...(apellido && { apellido }),
        ...(role && { role }),
      }); // Esto sólo va a agregar los campos si vinieron en la query
    } else {
      users = await userService.getUsers();
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUser,
  createUser,
  getUsers,
};
