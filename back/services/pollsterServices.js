const Pollster = require('../models');
const db = require('../models');

// Busqueda  de todos los encuestadores
async function getAll() {
  const pollsterList = await db.pollster.findAll();
  return pollsterList;
}

// Busqueda de encuestador por id
async function getById(id) {
  const pollster = await db.pollster.findByPk(id);

  if (pollster == null) {
    throw new Error('Encuestador no encontrado');
  }
  return pollster;
}

// Crear un usuario
async function createPollster(firstname, lastname, dni, phone, adress, email, roll) {
  const pollster = new Pollster();
  pollster.firstname = firstname;
  pollster.lastname = lastname;
  pollster.dni = dni;
  pollster.phone = phone;
  pollster.adress = adress;
  pollster.email = email;
  pollster.roll = roll;
  const pollsterCreate = await db.pollster.save();
  return pollsterCreate;
}

// editar encuestador
async function editPollster(id, firstname, lastname, dni, phone, adress, email) {
  const pollster = await getById(id);

  if (firstname) {
    pollster.name = firstname;
  }
  if (lastname) {
    pollster.lastname = lastname;
  }
  if (email) {
    pollster.email = email;
  }
  if (dni) {
    pollster.dni = dni;
  }
  if (phone) {
    pollster.phone = phone;
  }
  if (adress) {
    pollster.adress = adress;
  }
  const pollsterEdit = await db.pollster.save();
  return pollsterEdit;
}

// Eliminar encuestador

async function deletePollster(id) {
  const pollster = await getById(id);

  await pollster.destroy();
}

module.exports = {
  getAll,
  getById,
  createPollster,
  editPollster,
  deletePollster,
};
