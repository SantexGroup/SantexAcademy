const models = require('../models/index');

async function getAll() {
  const listPremios = await models.premio.findAll();
  return listPremios;
}

async function getById(id) {
  const prem = await models.premio.findByPk(id);

  if (prem == null) {
    throw new Error('Premio no encontrado');
  }

  return prem;
}

async function createPremios(name, description, costo, cantidad) {
  const premCreated = await models.premio.create({
    name,
    description,
    costo,
    cantidad,
  });
  return premCreated;
}

async function editPremios(id, name, description, costo, cantidad) {
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
