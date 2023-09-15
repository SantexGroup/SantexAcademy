const { userService } = require('../services/index')

const verifyLink = async (req, res) => {
    const codeRegister = req.query.codeRegister; // Consulta codigo que se recibe en URL del mail
     try {
       const userCode = await userService.getUserByData(codeRegister);// Verificacion con DB
       if (!userCode) {
         return res.status(404).json({ message: 'Código de registro no válido.' });// El codigo no existe en DB
        }
      const userId = await userService.getUser(userCode.id);// Si es valido, consulta usuario por ID en DB
       if (!userId) {
         return res.status(404).json({ message: 'Usuario no encontrado.' });// Usuario no se encontro en DB
       }
      // Si ambos datos coinciden en la base de datos, actualiza el campo a verificacion realizada
      userId.verificationCode = true;
      await userId.save();
      
      return res.status(200).json({ success: 'success' }); // Se maneja desde el front
    } catch (error) {
      console.error('En función verifyLink: ', error);
      return res.status(500).json({ message: 'Ocurrió un error interno.' }); // En caso de error interno
    }
  };

  module.exports = { verifyLink };
