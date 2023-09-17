const alquilerService = require('../services/alquiler-service');

async function getAlquileresByIdComprador(req, res) {
  const { idComprador } = req.params;
  const alquileres = await alquilerService.getAlquileresByIdComprador(idComprador);
  res.status(200).send(alquileres);
}

module.exports = { getAlquileresByIdComprador };
