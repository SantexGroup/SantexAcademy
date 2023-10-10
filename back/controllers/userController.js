const userService = require('../services/userService');
const { User } = require('../models');


async function loginUser(req, res) {
  try {
    const { nombreUsuario, contraseña } = req.body;

    const { usuario, token } = await userService.login(nombreUsuario, contraseña);

    res.status(200).json({ usuario, token });
  } catch (error) {
    console.error('Error al iniciar sesión: ', error);
    return res.status(401).json({ mensaje: 'Nombre de usuario o contraseña incorrectos' });
  }
}

async function createUser(req, res) {
  // Crear un usuario que no existia
  try {
    const nuevoUsuario = req.body;
    const {nombreUsuario} = req.body.nombreUsuario
    // Verificar que si existe un usuario con igual nombre de usuario
    let user = await User.findOne(nombreUsuario) || null;
    if (user !== null){
      return res.status(205).json({ msg: 'Usuario ya existente'})
    }
    // Si no existe un usuario
    const usuarioCreado = await userService.crearUsuario(nuevoUsuario);
    return res.status(201).json(usuarioCreado);
  } catch (error) {
    console.error('Error al crear usuario: ', error);
    return res.status(400).json({ mensaje: 'Error al crear usuario' });
  }
}
async function getAllUsers(req, res) {
  const users = await userService.getAll();
  res.status(200).send(users);
}

async function getUserById(req, res, next) {
  const { id } = req.params;
  try {
    const user = await userService.getById(id);
    if (user != null) {
      return res.status(200).send(user);  
    } else {
      res.status(404).json({ mensaje: 'Error al buscar usuario' })
    }
    
  } catch (error) {
    next(error)
  
  }

}

async function editUser(req, res) {
  try {
    const userId = req.params.id; 
    const updatedUserData = req.body; 

    const user = await userService.editUser(userId, updatedUserData);

    return res.status(200).json({ mensaje: 'Usuario actualizado correctamente', usuario: user });
  } catch (error) {
    console.error('Error al editar usuario: ', error);
    return res.status(400).json({ mensaje: 'Error al editar usuario' });
  }
}

async function deleteUser(req, res){
  const {id} = req.params;
  await userService.deleteUser(id);
  return res.status(200).send(`Usuario con el ${id} ha sido eliminado exitosamente`);
}
module.exports = { loginUser, createUser, getAllUsers, getUserById ,editUser,deleteUser};
