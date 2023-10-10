const jwt = require('jsonwebtoken');
const userProvider = require('../providers/userProvider');

const login = async (data) => {
  const user = await userProvider.userValidate(data);
  try {
    if (!user) {
      return null;
    }

    // Genera un token JWT
    const token = jwt.sign({
      userId: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role
    }, 'secret', { expiresIn: '1h' });
    return token;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    return null;
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
