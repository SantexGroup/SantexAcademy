const {
  Products, tipoProducto, User, Images,
} = require('../models');

// obtener todos
async function products() {
  const productos = await Products.findAll({
    include: [{ model: Images }],
  });
  console.log('Productos', productos);

  return productos;
}

// obtener por id
async function getProductoById(id) {
  const articulos = await Products.findByPk(id, {
    include: [{ model: Images }],
  });
  const idUser = articulos.idUsuario;
  const idTipo = articulos.idTipoProducto;
  await User.findByPk(idUser);
  await tipoProducto.findByPk(idTipo);

  if (articulos == null) {
    throw new Error();
  }
  return articulos;
}

// categorias

async function getAllCategories() {
  const CategoriesList = await tipoProducto.findAll();

  return CategoriesList;
}

// categoria por id
async function getCategoriaById(id) {
  const categoria = await tipoProducto.findOne({
    include: [{
      model: Products,
      where: { idTipoProducto: id },
    }],

  });

  if (categoria == null) {
    throw new Error();
  }

  return categoria;
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
  const articulo = await Products.findByPk(id);

  if (!articulo) {
    return { error: 'Artículo no encontrado' };
  }

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

// productos por vendedor
async function getProductosPorVendedor(id) {
  const productosVendedor = await Products.findAll({

    where: {
      idUsuario: id,
    },
    include: [{
      model: User,
    }],
  });

  if (productosVendedor.length < 1) {
    return { message: 'Usuario sin productos publicados' };
  }

  const primerProducto = productosVendedor[0];

  if (primerProducto.User === null) {
    return { error: 'Usuario no encontrado' };
  }

  return productosVendedor;
}

// eliminar articulo
async function deleteArticle(id) {
  try {
    const result = await Products.destroy({
      where: {
        id,
      },
    });

    if (result === 1) {
      return { success: true, message: `Articulo con ID ${id} eliminado exitosamente.` };
    }
    return { success: false, message: `No se encontró el Articulo con ID ${id}.` };
  } catch (error) {
    console.error(`Error al eliminar el articulo: ${error.message}`);
    return { success: false, message: `Error al eliminar el articulo: ${error.message}` };
  }
}

module.exports = {
  products,
  getAllCategories,
  chargeProducts,
  getProductoById,
  editArticle,
  getCategoriaById,
  getProductosPorVendedor,
  deleteArticle,
};
