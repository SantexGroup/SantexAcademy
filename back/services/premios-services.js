const { DataTypes, Sequelize } = require('sequelize');
const premiosModel = require('../models/premios-model');
const { sequelize } = require('../models');

const Premios = premiosModel(sequelize, DataTypes);

async function getAll() {
  const listPremios = await Premios.findAll();
  return listPremios;
}

async function getById(id) {
  const prem = await Premios.findByPk(id);

  if (prem == null) {
    throw new Error('Premio no encontrado');
  }

  return prem;
}

async function createPremios(name, description, costo,cantidad) {
  const prem = new Premios();

  prem.name = name;
  prem.description = description;
  prem.costo= costo;
  prem.cantidad= cantidad

  const premCreated = await prem.save();

  return premCreated;
}

async function editPremios(id, name, description, costo,cantidad) {
  const prem = await getById(id);
  if (name) {
    prem.name = name;
  }
  if (description) {
    prem.description = description;
  }
  if (costo) {
    prem.costo = costo;
  }
  if (cantidad) {
    prem.cantidad = cantidad;
  }

  const premEdited = await prem.save();

  return premEdited;
}

async function deletePremios(id) {
  const prem = await getById(id);

  await prem.destroy();
}

module.exports = {
  getAll, getById, createPremios, editPremios, deletePremios,
};
