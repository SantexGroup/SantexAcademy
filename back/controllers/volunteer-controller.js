const volunteerServices = require('../services/volunteer-services');

async function getAllVolunteer(req, res) {
  const users = await volunteerServices.getAll();
  res.send(users);
}

async function getVolunteerById(req, res, next) {
  const { id } = req.params;

  try {
    const user = await volunteerServices.getById(id);
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
}

async function createVolunteer(req, res) {
  const {
    name, lastname, dni, email, password, address, phone,
  } = req.body;

  // eslint-disable-next-line max-len
  const user = await volunteerServices.createUser(name, lastname, dni, email, password, address, phone);

  res.status(201).send(user);
}

async function editVolunteer(req, res) {
  const { id } = req.params;
  const {
    name, lastname, dni, email, password, address, phone,
  } = req.body;

  // eslint-disable-next-line max-len
  const user = await volunteerServices.editUser(id, name, lastname, dni, email, password, address, phone);

  res.status(201).send(user);
}

async function deleteVolunteer(req, res) {
  const { id } = req.params;

  await volunteerServices.deleteUser(id);

  res.status(200).send(`Usuario con el id ${id} ha sido eliminado exitosamente`);
}

module.exports = {
  getAllVolunteer, getVolunteerById, createVolunteer, editVolunteer, deleteVolunteer,
};
