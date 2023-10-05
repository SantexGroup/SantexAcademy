const alquilerService = require('../services/alquiler-service');

async function getAlquileresByIdComprador(req, res) {
  const { idComprador } = req.params;
  const alquileres = await alquilerService.getAlquileresByIdComprador(idComprador);
  res.status(200).send(alquileres);
}

async function newAlquiler(req, res) {
  const { idProducto } = req.params;
  const { idComprador, modoEnvio, dias, formaPago } = req.body;

  const alquiler = await alquilerService.newAlquiler(idProducto, idComprador, modoEnvio, dias, formaPago);

  if (alquiler) {
  res.status(200).send(alquiler);
  } else {
    res.status(404).send('error en la contratacion del articulo');
  }
}

module.exports = { getAlquileresByIdComprador, newAlquiler };
