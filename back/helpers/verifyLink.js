const { userService } = require('../services/index');
const { User } = require('../models');

const verifyLink = async (req, res) => {
  const codeRegister = req.query.codeRegister; // Consulta código que se recibe en la URL del correo
  try {
    console.log('Paso 1: Consulta código en DB');
    console.log(`Valor de codeRegister: ${codeRegister}`);
    const userCode = await userService.getUserByData(codeRegister); // Verificación con la DB del dato de la url compara con dato guardado
    if (!userCode) {
      console.log('Paso 2: Código no válido en DB');
      console.log(`Valor de userCode: ${userCode}`);
      return res.status(404).json({ message: 'Código de registro no válido.' }); // El código no existe en la DB
    }
    console.log('Paso 3: Consulta usuario por ID en DB');
    console.log(`Valor de userCode: ${userCode}`);
    const userId = await userService.getUser(userCode.id); // Si es válido, consulta usuario por ID en DB
    console.log(`Valor de const userId: ${userId}`);
    console.log(`Valor de userCode.id: ${userCode.id}`);
    if (!userId) {
      console.log('Paso 4: Usuario no encontrado en DB');
      return res.status(404).json({ message: 'Usuario no encontrado.' }); // Usuario no se encontró en la DB
    }
    console.log('Paso 5: Actualizando verificationCode a true');
    // Si ambos datos coinciden en la base de datos, actualiza el campo a verificación realizada
    userId.verificationCode = true;
    console.log(userId instanceof User); // BORRAR es para depurar
    await userId.save();
    console.log('Paso 6: verificationCode actualizado correctamente');
    return res.status(200).json({ success: 'success' }); // Se maneja desde el front
  } catch (error) {
    console.error('En función verifyLink: ', error);
    return res.status(500).json({ message: 'Ocurrió un error interno en verificación de link.' }); // En caso de error interno
  }
};

module.exports = { verifyLink };





// const { userService } = require('../services/index');
// const { User } = require('../models');

// const verifyLink = async (req, res) => {
//     const codeRegister = req.query.codeRegister; // Consulta codigo que se recibe en URL del mail
//      try {
//        const userCode = await userService.getUserByData(codeRegister);// Verificacion con DB
//        if (!userCode) {
//          return res.status(404).json({ message: 'Código de registro no válido.' });// El codigo no existe en DB
//         }
//       const userId = await userService.getUser(userCode.id);// Si es valido, consulta usuario por ID en DB
//        if (!userId) {
//          return res.status(404).json({ message: 'Usuario no encontrado.' });// Usuario no se encontro en DB
//        }
//       // Si ambos datos coinciden en la base de datos, actualiza el campo a verificacion realizada
//       userId.verificationCode = true;
//       console.log(userId instanceof User);//BORRAR es para depurar
//       await userId.save();
      
//       return res.status(200).json({ success: 'success' }); // Se maneja desde el front
//     } catch (error) {
//       console.error('En función verifyLink: ', error);
//       return res.status(500).json({ message: 'Ocurrió un error interno en verificación de link.' }); // En caso de error interno
//     }
//   };

//   module.exports = { verifyLink };
