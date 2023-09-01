const ms = require('ms');
const Password = require('../models/Password');
const db = require('../models');

// Crear una password

// eslint-disable-next-line camelcase
async function createPassword(password, limit_time) {
  const pass = new Password();
  pass.password = password;
  // eslint-disable-next-line camelcase
  pass.limit_time = limit_time;
  const passwordCreate = await db.pass.save();
  return passwordCreate;
}

// Obtener password
async function getPwd(password) {
  const pwd = await db.password.findOne({
    where: { password },
  });

  return pwd;
}

// Función generadora de OTP
function generarOtp() {
  const otp = Math.floor((1 + Math.random()) * 0x1000).toString().substring(1);
  return otp;
}

// Funcion para obtener un limite de tiempo

function limiTime(minValidos) {
  const tiempoActual = new Date().getTime();
  const tiempoExpi = new Date(tiempoActual + ms(`${minValidos}m`)).getTime();
  return tiempoExpi;
}

const minValidos = 10;
const limiteTiempo = limiTime(minValidos);
console.log(`El OTP será valido hasta: ${limiteTiempo}`);

// Comprobación de validez de OTP
const tiempoActual = new Date();
if (tiempoActual <= limiteTiempo) {
  console.log('El OTP es válido');
} else {
  console.log('El OTP ha expirado');
}

module.exports = {
  createPassword,
  getPwd,
  generarOtp,
  limiTime,
};
