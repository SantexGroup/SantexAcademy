const { alquiler, Products } = require('../models');

// obtener ventas segun vendedor
async function getAlquileresByVendedor(id) {
  const ventasVendedor = await alquiler.findAll(
    {
      include: [{
        model: Products,
        where: { idUsuario: id },
      }],

    },
  );

  return ventasVendedor;
}

module.exports = { getAlquileresByVendedor };
