const { User } = require('../models');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await db.User.findOne({ where: { email } });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Genera un token JWT
    const token = jwt.sign({ userId: user.id }, 'mi_secreto_secreto', { expiresIn: '1h' });

    res.json({ token });

    res.status(200).json({ message: 'Login successful' });

  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = { login };