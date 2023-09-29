const { Producto } = require('../models');

const createProduct = async (producto) => {
  try {
    const newProduct= await Producto.create(producto);
    return newProduct;
  } catch (err) {
    console.error('Error creating product', err);
    throw err;
  }
};

const getProduct = async (id) => {
  try {
    const product = await Producto.findByPk(id);
    return product;
  } catch (err) {
    console.error('Error getting product', err);
    throw err;
  }
};

const getAllProducts = async () => {
  try {
    const products = await Producto.findAll();
    return products;
  } catch (err) {
    console.error('Error getting products', err);
    throw err;
  }
};

const updateProduct = async (id, producto) => {
  try {
    const updatedProduct = await Producto.update(producto, {
      where: { id },
    });
    return updatedProduct;
  } catch (err) {
    console.error('Error updating product', err);
    throw err;
  }
};

const deleteProduct = async (id) => {
  try {
    const deletedProduct = await Producto.destroy({     where: { id },
    });
    return deletedProduct;
  } catch (err) {
    console.error('Error deleting product', err);
    throw err;
  }
};

module.exports = {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
