// const jwt = require('jsonwebtoken');
// const byscriptjs = require('bcrypt');
// const conexion = require('../config/files/sequelize.config');
const adminService = require('../services/adminSerivice');

// Crear un admin
async function createAdmin(req, res) {
  try {
    const {
      firstname,
      lastname,
      dni,
      phone,
      adress,
      email,
    } = req.body;
    const admin = await adminService.createAdmin(firstname, lastname, dni, phone, adress, email);
    res.status(200).send(admin);
  } catch (error) {
    throw Error('error');
  }
}

module.exports = { createAdmin };
