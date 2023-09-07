// const jwt = require('jsonwebtoken');
// const byscriptjs = require('bcrypt');
// const conexion = require('../config/files/sequelize.config');
const pollsterService = require('../services/pollsterServices');

// Traer todos los encuestadores
async function getAllPollster(req, res) {
  const pollster = await pollsterService.getAll();
  res.status(200).send(pollster);
}

// Traer un encuestador por id

async function getPollsterById(req, res, next) {
  const { id } = req.params;

  try {
    const pollster = await pollsterService.getById(id);
    res.status(200).send(pollster);
  } catch (error) {
    next(error);
  }
}

// Crear un encuestador
async function createPollster(req, res) {
  try {
    const {
      firstname,
      lastname,
      dni,
      phone,
      adress,
      email,
      password,
      roll,
    } = req.body;
    // eslint-disable-next-line max-len
    const pollster = await pollsterService.createPollster(firstname, lastname, dni, phone, adress, email, password, roll);
    res.status(200).send(pollster);
  } catch (error) {
    throw Error('error');
  }
}

// Editar un encuestador

async function editPollster(req, res) {
  const { id } = req.params;
  const {
    firstname,
    lastname,
    dni,
    phone,
    adress,
    email,
    // eslint-disable-next-line camelcase
    password_id,
  } = req.body;
  // eslint-disable-next-line max-len
  const pollster = await pollsterService.editPollster(id, firstname, lastname, dni, phone, adress, email, password_id);

  res.status(200).send(pollster);
}

// Eliminar encuestador

async function deletePollster(req, res) {
  const { id } = req.params;
  await pollsterService.deletePollster(id);

  res.status(200).send(`EL encuestador con el id: ${id}, ha sido eliminado correctamente`);
}

module.exports = {
  createPollster,
  getAllPollster,
  getPollsterById,
  editPollster,
  deletePollster,
};
