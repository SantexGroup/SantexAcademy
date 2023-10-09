const authService = require('../services/authService');

const login = async (req, res) => {
  try {
    const authUser = await authService.login(req.body);
    if (authUser) {
      res.status(200).json({ message: 'Login exitoso', token: authUser });
    } else {
      res.status(401).json({ message: 'El usuario no existe o la contraseña es incorrecta' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = { login };
