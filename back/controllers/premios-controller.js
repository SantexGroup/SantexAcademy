const premiosServices = require('../services/premios-services');

async function getAllPremios(req, res) {
  const prems = await premiosServices.getAll();
  res.status(200).send(prems);
}

async function getPremiosById(req, res, next) {
  const { id } = req.params;

  try {
    const prem = await premiosServices.getById(id);
    res.status(200).send(prem);
  } catch (error) {
    next(error);
  }
}

async function createPremios(req, res) {
  const {
    name, description, costo, cantidad,
  } = req.body;

  const prem = await premiosServices.createPremios(name, description, costo, cantidad);

  res.status(201).send(prem);
}

async function editPremios(req, res) {
  const { id } = req.params;
  const {
    name, description, costo, cantidad,
  } = req.body;

  const prem = await premiosServices.editPremios(id, name, description, costo, cantidad);
  res.status(201).send(prem);
}

async function deletePremios(req, res) {
  const { id } = req.params;
  await premiosServices.deletePremios(id);

  res.status(200).send();
}

module.exports = {
  getAllPremios, getPremiosById, createPremios, editPremios, deletePremios,
};
