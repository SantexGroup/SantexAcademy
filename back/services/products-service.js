const { Products, tipoProducto } = require('../models');
// const jwt = require('jsonwebtoken')

/* async function login(name, password) {
  const user = await User.findOne({
    where: {
      name: name,
      password: password
    }
  })

  if (!user) {
    throw new NotAuthorizedException("Email y/o clave incorrectos")
  }

  const token = jwt.sign({
    id: user.id,
    email: user.email,
    name: user.name
  }, 'admin')

  return {
    accessToken: token
  }
} */

async function products() {
  const productos = await Products.findAll();
  console.log('Productos', productos);

  return productos;
}

// categorias

async function getAllCategories() {
  const CategoriesList = await tipoProducto.findAll();

  return CategoriesList;
}

// carga producto

async function chargeProducts(idUsuario, idTipoProducto, nombre, detalles, precio, envio) {
  const producto = new Products();

  producto.idUsuario = idUsuario;
  producto.idTipoProducto = idTipoProducto;
  producto.nombre = nombre;
  producto.detalles = detalles;
  producto.precio = precio;
  producto.envio = envio;

  const productCreated = await producto.save();
  return productCreated;
}

module.exports = { products, getAllCategories, chargeProducts };
