const { productProvider } = require("../providers");

const createProduct = async (product) => {
  const newProduct = await productProvider.createProduct(product);
  return newProduct;
};

const getProduct = async (id) => {
  const product = await productProvider.getProduct(id);
  if (product) {
    return product;
  } else {
    return null;
  }
};

const getAllProducts = async () => {
  const products = await productProvider.getAllProducts();
  if (products) {
    return products;
  } else {
    return null;
  }
};

const updateProduct = async (id, product) => {
  const updatedProduct = await productProvider.updateProduct(id, product);
  return updatedProduct;
};

const deleteProduct = async (id) => {
  const deletedProduct = await productProvider.deleteProduct(id);
  return deletedProduct;
};

module.exports = {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
