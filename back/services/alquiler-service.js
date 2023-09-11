const { Alquiler, Products } = require('../models');

async function getAlquileresByIdComprador(idComprador) {
  const alquileres = await Alquiler.findAll({
    where: {
      idComprador,

    },
    include: [{ model: Products }],
  });
  return alquileres;
}

module.exports = { getAlquileresByIdComprador };
