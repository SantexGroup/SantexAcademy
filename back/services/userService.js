const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Genera un token JWT válido para el usuario
function generateJWT(datosUsuario) {
  try {
    // Genera un token JWT para el usuario recién registrado
    const tokenLogin = jwt.sign({ id: datosUsuario.id, nombreUsuario: datosUsuario.nombreUsuario }, process.env.SECRET_KEY || 'grupo39', { expiresIn: '1h' });
    return tokenLogin;
  } catch (error) {
    console.error('Error al generar JWT:', error);
    throw error;
  }
}


async function crearUsuario(datosUsuario) {
  try {
   
    // Cifra la contraseña con el salt
    const contraseñaCifrada = await bcrypt.hash(datosUsuario.contraseña, 10);

    // Reemplaza la contraseña en los datos del usuario
    datosUsuario.contraseña = contraseñaCifrada;

   

   const usuarioCreado = await User.create(datosUsuario);

   return { usuario: usuarioCreado.toJSON()};
  } catch (error) {
    console.error('Error al crear usuario:', error);
    throw error;
  }
}

async function login(nombreUsuario, contraseña) {
  try {
    // Busca el usuario por nombre de usuario
    const usuario = await User.findOne({ where: { nombreUsuario } });

    if (!usuario) {
      throw new Error('Nombre de usuario o contraseña incorrectos');
    }

    // Compara la contraseña proporcionada con la contraseña almacenada cifrada
    const contrasenaValida = await bcrypt.compare(contraseña, usuario.contraseña);

    if (!contrasenaValida) {
      throw new Error('Nombre de usuario o contraseña incorrectos');
    }

    // Genera un token JWT para el usuario
    const tokenLogin = generateJWT(usuario);
    
    return { tokenLogin };
  } catch (error) {
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
    user.contraseña = updatedData.contraseña;

    await user.save(); 

    return user.toJSON(); 
  } catch (error) {
    throw error;
  }
}

async function deleteUser(id){
  const user = await getById(id);
  if (!user) {
    throw new Error('Usuario no encontrado');
  }
  await user.destroy(id)
}

module.exports = { crearUsuario, login,getAll, getById, editUser,deleteUser };

//nombreCompleto,nombreUsuario,fechaNacimiento,genero,correoElectronico,password,