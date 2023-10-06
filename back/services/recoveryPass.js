const RecoveryToken = require("../models/RecoveryToken");
const nodemailerTransporter = require("../config/nodemailer-config"); // Importa tu configuración de nodemailer
const { userController } = require("../controllers");

// Función para generar un token aleatorio
function generateRandomToken() {
  return Math.random().toString(36).substring(2);
}

const generateRecoveryToken = async ({ orgId, userId }) => {
try {
  if (orgId) {
    return await RecoveryToken.create({
      orgId,
      token: generateRandomToken(),
      expiresAt: new Date(Date.now() + 3600000), // Expira en una hora
    });
  } else if (userId) {
    return await RecoveryToken.create({
      userId,
      token: generateRandomToken(),
      expiresAt: new Date(Date.now() + 3600000),
    });
  } else {
    throw new Error("Tipo de entidad no válido");
  }
} catch (error) {
  throw error;
}
};



// Envía un correo electrónico con el token de recuperación
const sendRecoveryEmail = async (email, recoveryToken) => {
  try {
    const mailOptions = {
      from: process.env.DIRECTION_MAIL, // Dirección de correo del remitente
      to: "mauridemasi88@gmail.com", //email, // Dirección de correo del destinatario
      subject: "Recuperación de contraseña", // Asunto del correo
      text: `Utiliza el siguiente token para recuperar tu contraseña: ${recoveryToken.token}`, // Cuerpo del correo
    };

    await nodemailerTransporter.sendMail(mailOptions); // Utiliza tu configuración de nodemailer
  } catch (error) {
    throw error;
  }
};

module.exports = { generateRecoveryToken, sendRecoveryEmail };
