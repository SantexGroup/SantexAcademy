const userService = require('../services/userService');

async function createUser(req, res) {
  // Crear un usuario que no existia
  try {
    const nuevoUsuario = req.body;
    // Verificar que si existe un usuario con igual nombre de usuario

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
module.exports = { createUser, getAllUsers, getUserById ,editUser,deleteUser};
