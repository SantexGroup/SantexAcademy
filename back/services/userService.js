const { User } = require('../models');

async function crearUsuario(datosUsuario) {
  try {
    const usuarioCreado = await User.create(datosUsuario);
    console.log('Usuario creado:', usuarioCreado.toJSON());
    return usuarioCreado.toJSON();
  } catch (error) {
    console.error('Error al crear usuario:', error);
    throw error;
  }
}

async function getAll() {
  const listUsers = await User.findAll()
  return listUsers;
}
async function getById(id) {
  const user = await User.findByPk(id)
  return user;


}
async function editUser(userId, updatedData){
  try {
    const user = await getById(userId);

    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    user.nombreCompleto = updatedData.nombreCompleto;
    user.nombreUsuario = updatedData.nombreUsuario;
    user.fechaNacimiento = updatedData.fechaNacimiento;
    user.genero = updatedData.genero;
    user.correoElectronico = updatedData.correoElectronico;
    user.password = updatedData.password;

    await user.save(); 

    return user.toJSON(); 
  } catch (error) {
    throw error;
  }
}

async function deleteUser(id){
  const user = await getById(id)
  await user.destroy(id)
}

module.exports = { crearUsuario, getAll, getById, editUser,deleteUser };

//nombreCompleto,nombreUsuario,fechaNacimiento,genero,correoElectronico,password,