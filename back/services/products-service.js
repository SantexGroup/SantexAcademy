const { Products, tipoProducto, User,  } = require('../models');
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

// obterner por id
async function getProductoById(id) {
  const articulos = await Products.findByPk(id);
  const idUser = articulos.idUsuario;
  const idTipo = articulos.idTipoProducto;
  const usuario = await User.findByPk(idUser);
  const tipo = await tipoProducto.findByPk(idTipo)
  if (articulos == null) {
    throw new Error();
    
  }
  
  return {articulos, usuario, tipo};
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

// modificar articulo

async function editArticle(id, idUsuario, idTipoProducto, nombre, detalles, precio, envio) {
  const articulo = await getProductoById(id);

  if (idUsuario) {
    articulo.idUsuario = idUsuario;
  }
  if (idTipoProducto) {
    articulo.idTipoProducto = idTipoProducto;
  }

  if (nombre) {
    articulo.nombre = nombre;
  }

  if (detalles) {
    articulo.detalles = detalles;
  }

  if (precio) {
    articulo.precio = precio;
  }

  if (envio) {
    articulo.envio = envio;
  }

  const productEdited = await articulo.save();

  return productEdited;
}

module.exports = {
  products, getAllCategories, chargeProducts, getProductoById, editArticle,
};
