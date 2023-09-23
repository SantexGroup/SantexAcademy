const { userService } = require('../services/index');
const { User } = require('../models');

const verifyLink = async (req, res) => {
  const codeRegister = req.body.codeRegister; // Consulta código recibido en Angular desde URL enviada a post y aquí
  try {
    const userCode = await userService.getUserByData({ codeRegister: codeRegister }); // Busca en Db y compara
      if (!userCode) {
         return res.status(404).json({ message: 'Código de registro no válido.' }); // El código no existe en la DB
      }

      const userId = await userService.getUser(userCode.id); // Si es válido, consulta usuario por ID en DB
        if (!userId) {
           return res.status(404).json({ message: 'Usuario no encontrado.' }); // Usuario no se encontró en la DB
        }
    
          userId.verificationCode = true;// Si ambos datos coinciden en la base de datos, actualiza el campo a verificación realizada
          await userId.save();//Guarda cambio en DB
          return res.status(200).json({ success: 'success' }); // Respuesta se maneja desde el front

  } catch (error) {
      console.error('En función verifyLink: ', error);
      return res.status(500).json({ message: 'Ocurrió un error interno en verificación de link.' }); // En caso de error interno
  }
};

module.exports = { verifyLink };




///--------------- codigo viejo ---- releer, aprender diferencias y borra ---///
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
