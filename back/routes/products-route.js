const express = require('express');
const productsController = require('../controllers/products-controller');
// const { isAuthenticated } = require('../middleware/authentication');

const router = express.Router();

// obtener todos los productos
router.get('/products', productsController.products);

// obtener producto por id
router.get('/obtener-producto-por-id/:id', productsController.getProductFromId);

// categorias
router.get('/categories', productsController.getCategories);

// obtener categoria por id
router.get('/categories/:id', productsController.getCategoriesFromId);

// cargar producto
router.post('/cargar-producto', productsController.chargeProduct);

// modificar articulo
router.put('/modificar-articulo/:id', productsController.editProduct);

// eliminar articulo
router.delete('/eliminar-articulo/:id', productsController.deleteProduct);

// productos por vendedor
router.get('/productos-por-vendedor/:id', productsController.getProductosVendedor);

module.exports = router;
