// const jwt = require('jsonwebtoken');
// const byscriptjs = require('bcrypt');
// const conexion = require('../config/files/sequelize.config');
const adminService = require('../services/adminSerivice');

// Traer todos los admins
async function getAllAdmin(req, res) {
  const admins = await adminService.getAll();

  res.status(200).send(admins);
}

// Traer un admin por id
async function getAdminById(req, res, next) {
  const { id } = req.params;

  try {
    const admin = await adminService.getById(id);
    res.status(200).send(admin);
  } catch (error) {
    next(error);
  }
}

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
      password,
      // eslint-disable-next-line camelcase
      poll_id,
      roll,
    } = req.body;
    const admin = await adminService.createAdmin(
      firstname,
      lastname,
      dni,
      phone,
      adress,
      email,
      password,
      poll_id,
      roll,
    );
    res.status(200).send(admin);
  } catch (error) {
    throw Error('error');
  }
}

// Editar un usuario
async function editAdmin(req, res) {
  const { id } = req.params;
  const {
    firstname,
    lastname,
    dni,
    phone,
    adress,
    email,
  } = req.body;

  const admin = await adminService.editAdmin(
    id,
    firstname,
    lastname,
    dni,
    phone,
    adress,
    email,
  );

  res.status(201).send(admin);
}

// Eliminar admin
async function deleteAdmin(req, res) {
  const { id } = req.params;

  await adminService.deleteAdmin(id);

  res
    .status(200)
    .send(`Administrador con el id ${id}, se ha eliminado correctamente`);
}

module.exports = {
  createAdmin,
  getAdminById,
  getAllAdmin,
  editAdmin,
  deleteAdmin,
};
