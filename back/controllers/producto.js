const { productService } = require('../services');

const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ action: 'createProduct', error: err.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await productService.getProduct(req.params.id);
    if (!product) {
      res.status(404).json({ action: 'getProduct', error: 'Product not found.' });
    } else {
      res.json(product);
    }
  } catch (err) {
    res.status(500).json({ action: 'getProduct', error: err.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    if (!products) {
      res.status(404).json({ action: 'getAllProducts', error: 'Products not found.' });
    } else {
      res.json(products);
    }
  } catch (err) {
    res.status(500).json({ action: 'getAllProducts', error: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await productService.updateProduct(req.params.id, req.body);
    res.status(204).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ action: 'updateProduct', error: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await productService.deleteProduct(req.params.id);
    res.json(deletedProduct);
  } catch (err) {
    res.status(500).json({ action: 'deleteProduct', error: err.message });
  }
};

module.exports = {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
