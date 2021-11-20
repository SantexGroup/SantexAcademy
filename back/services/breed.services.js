const breedModel = require('../models').Razas;
const BreedNotExistException = require('../exceptions/breedNotExist.exception');

async function existeRaza(id) {
  const busqueda = { id };
  const tmp = await breedModel.findOne({
    where: busqueda,
    attributes: ['raza'],
  });
  return tmp;
}

async function getAll() {
  const result = await breedModel.findAll({
    attributes: ['id', 'raza', 'peligroso'],
  });

  return result;
}

async function getOne(data) {
  const existe = await existeRaza(data.id);
  if (existe) {
    return existe;
  }
  throw new BreedNotExistException();
}

module.exports = {
  existeRaza,
  getAll,
  getOne,
};
