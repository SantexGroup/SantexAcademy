const {
  Alquiler, Products, Images,
} = require('../models');

// obtener ventas segun vendedor
async function getAlquileresByVendedor(id) {
  const ventasVendedor = await Alquiler.findAll(
    {
      include: [{
        model: Products,
        where: { idUsuario: id },
        include: [{ model: Images }, { model: Alquiler }],
      }],
    },
  );

  if (ventasVendedor.length < 1) {
    return { error: 'Usuario sin ventas' };
  }

  return ventasVendedor;
}

module.exports = { getAlquileresByVendedor };
