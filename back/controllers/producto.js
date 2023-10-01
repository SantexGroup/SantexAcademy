const { productService } = require('../services');
require("dotenv").config();
const fs = require("fs-extra");
const cloudinary = require("../config/cloudinary");

const createProduct = async (req, res) => {

    try {
      const { image, ...restOfData } = req.body;
      let imageUrl = "";
      let publicId = "";
  
      if (req.file) {
        const uploadResult = await cloudinary.uploader.upload(req.file.path);
        imageUrl = uploadResult.secure_url;
        publicId = uploadResult.public_id;
        await fs.unlink(req.file.path);
      }
  
      const newProduct = await productService.createProduct({
        image: { imageUrl, publicId },
        ...restOfData,
      });
      res.status(201).json({
        message: "The organization was successfully created",
        newProduct,
      });
    } catch (err) {
      res.status(500).json({ action: "createOrganization", error: err.message });
    }
  };

const getProduct = async (req, res) => {
  try {
    const product = await productService.getProduct(req.params.id);
    if (!product) {
      res.status(404).json({ action: 'getProduct', error: 'product not found.' });
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
      res.status(404).json({ action: 'getAllProducts', error: 'products not found.' });
    } else {
      res.json(products);
    }
  } catch (err) {
    res.status(500).json({ action: 'getAllProducts', error: err.message });
  }
};

const updateProduct = async (req, res) => {
    try {
      const productId = req.productId;
  
      const updatedProduct = await productService.updateProduct(
        req.body,
        productId
      );
      if (!updatedProduct) {
        res.status(404).json({
          action: "updateProductById",
          error: "Prodcut not found",
        });
      }
  
      res.status(200).json({
        message: "El producto se modifico exitosamente",
        organization,
      });
    } catch (err) {
      res
        .status(500)
        .json({ action: "updateProductById", error: err.message });
    }
  };
  
const deleteProduct = async (req, res) => {
  try {
    const deletedproduct = await productService.deleteProduct(req.params.id);
    res.json(deletedproduct);
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
