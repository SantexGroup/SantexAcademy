const breedModel = require("../models").Razas;
//const BreedExistException = require("../exceptions/breedExist.exception");

async function existeRaza(id) {
  let busqueda = { id: id };
  let tmp = await breedModel.findOne({
    where: busqueda,
  });

  return tmp;
}


async function getAll() {
  const result = await breedModel.findAll({
    attributes: ["id", "raza", "peligroso"],
  });


  return result;
}

module.exports = {
    existeRaza,
    getAll,
};
