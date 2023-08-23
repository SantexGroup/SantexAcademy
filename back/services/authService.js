const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../models'); 


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
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  };

// Función para registrar un nuevo usuario
const registerUser = async (userData) => {
  
};

// Función para verificar un token JWT
const verifyToken = (token) => {
  
};

module.exports = {
  registerUser,
  login,
  verifyToken,
};