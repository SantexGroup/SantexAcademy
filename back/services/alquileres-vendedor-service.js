const { Alquiler, Products } = require('../models');

// obtener ventas segun vendedor
async function getAlquileresByVendedor(id) {
  const ventasVendedor = await Alquiler.findAll(
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
