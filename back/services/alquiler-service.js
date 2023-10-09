const { Alquiler, Products, Images, User } = require('../models');

async function getAlquileresByIdComprador(idComprador) {
  const alquileres = await Alquiler.findAll({
    where: {
      idComprador,
      
    },
    include: { model: Products, include: [{ model: Images}, {model: User} ]},
  });
  return alquileres;
}

async function newAlquiler(idProducto, idComprador, modoEnvio, dias, formaPago) {

  const producto = await Products.findByPk(idProducto);

  if (producto) {
    producto.estado = false;
    const productoRented = await producto.save();
    console.log(productoRented);

    const alquiler = new Alquiler();

    alquiler.idProducto = idProducto;
    alquiler.idComprador = idComprador;
    alquiler.modoEnvio = modoEnvio;
    alquiler.dias = dias;
    alquiler.formaPago = formaPago;

    const alquilerSaved = await alquiler.save();

    return [ productoRented, alquilerSaved ];
  } else {
    return new Error('Producto no encontrado');
  }
}

module.exports = { getAlquileresByIdComprador, newAlquiler };