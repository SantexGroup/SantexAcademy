const userService = require('../services/userService')
console.log("estoy en userController")

//createUser
//nombreCompleto, nombreUsuario, fechaNacimiento, genero, correoElectronico, contraseña
async function createUser(req, res) {

    const {nombreCompleto, nombreUsuario, fechaNacimiento, genero, correoElectronico, contraseña} = req.body;
    
    console.log("estoy en createUser en userController")

    const user = await userService.createUser(nombreCompleto, nombreUsuario, fechaNacimiento, genero, correoElectronico, contraseña)
    // console.log(user)
    res.status(200)
}

// async function getUserById(req, res){
//     const idParams = req.params.id
//     let user;
//     try {
//         user = await userService.getUserById(idParams);
//     } catch (error) {
//         console.log(error)
//         res.status(500).json(error)
//     }

//     res.status(200).json(user)
    
    

// }


module.exports = {createUser}