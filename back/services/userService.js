
const {User} = require('../models/user')


async function crearUsuario(datosUsuario) {
    try {
      const usuarioCreado = await User.create(datosUsuario);
      console.log('Usuario creado:', usuarioCreado.toJSON());
      return usuarioCreado;
    } catch (error) {
      console.error('Error al crear usuario:', error);
      throw error;
    }
}

// async function createUser(nombreCompleto, nombreUsuario, fechaNacimiento, genero, correoElectronico, contraseña) {

//     User.create({
//         nombreCompleto: nombreCompleto
//     }).then(console.log)
    // const user = new User();
    // console.log("estoy en createUser en userService")

    // user.nombreCompleto = nombreCompleto;
    // user.nombreUsuario = nombreUsuario;
    // user.fechaNacimiento = fechaNacimiento;
    // user.genero = genero;
    // user.correoElectronico = correoElectronico;
    // user.contraseña = contraseña;

    // const userCreated = await user.save();
    // return userCreated;
// }

// async function getUserById(id){
//     let account = User.findByPK(id)
//     console.log(account)
//     return account;
// }

module.exports = {crearUsuario}