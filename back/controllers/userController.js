// const userService = require('../services/userService')
const {User} = require('../models')
console.log("estoy en userController")

//createUser
//nombreCompleto, nombreUsuario, fechaNacimiento, genero, correoElectronico, contraseña
async function createUser(req, res) {

    // Crear un usuario que no existia
    try {
        const nuevoUsuario = req.body;
        //Verificar que si existe un usuario con igual nombre de usuario 

        // Si no existe un usuario
        const usuarioCreado = await User.create(nuevoUsuario);
        return res.status(201).json(usuarioCreado);
    } catch (error) {
        console.error('Error al crear usuario: ', error);
        return res.status(500).json({mensaje: 'Error al crear usuario'})
        
    }




}



module.exports = {createUser}