const alquileresVendedorService = require('../services/alquileres-vendedor-service');

// obtener ventas segun vendedor

async function getAlquileresByVendedor(req, res) {
  const { id } = req.params;
  const alquileresByVendedor = await alquileresVendedorService.getAlquileresByVendedor(id);

  res.status(200).send(alquileresByVendedor);
}

module.exports = { getAlquileresByVendedor };
