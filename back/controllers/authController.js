// // authController.js
// const jwt = require('jsonwebtoken');
// const userService = require('../services/userService');

// async function login(req, res, next) {
//   try {
//     const { email, contrasena } = req.body;

//     // Verificar las credenciales del usuario
//     const dbUser = await userService.validateUser(email, contrasena);

//     if (!dbUser) {
//       return res.status(401).json({ message: 'Credenciales inválidas' });
//     }

//     // Generar un token de acceso
//     const accessToken = jwt.sign({ userId: dbUser.id }, 'your-secret-key', { expiresIn: '1h' });

//     res.json({ accessToken });
//   } catch (error) {
//     next(error);
//   }
// }

// module.exports = {
//   login,
// };
