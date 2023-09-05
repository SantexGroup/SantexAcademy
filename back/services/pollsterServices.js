// const Pollster = require('../models');
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
async function createPollster(
  // eslint-disable-next-line camelcase
  firstname,
  lastname,
  dni,
  phone,
  adress,
  email,
  password,
  roll,
) {
  // eslint-disable-next-line new-cap
  console.log('enscuestador a crear');
  // eslint-disable-next-line new-cap
  const pollster = new db.pollster();
  pollster.firstname = firstname;
  pollster.lastname = lastname;
  pollster.dni = dni;
  pollster.phone = phone;
  pollster.adress = adress;
  pollster.email = email;
  pollster.password = password;
  pollster.roll = roll;
  const pollsterCreate = await pollster.save();

  return pollsterCreate;
}

// editar encuestador
async function editPollster(
  id,
  firstname,
  lastname,
  dni,
  phone,
  adress,
  email,
  // eslint-disable-next-line camelcase
  password_id,
) {
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
  // eslint-disable-next-line camelcase
  if (password_id) {
    // eslint-disable-next-line camelcase
    pollster.password_id = password_id;
  }
  const pollsterEdit = await pollster.save();
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
