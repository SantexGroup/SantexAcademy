const productscontroller = {};
const db = require('../models');

/**
 * @method POST
 * @name create
 * @body toda la info del producto
 * @description metodo para crear un producto y almacenarlo en la base de datos
 */
productscontroller.create =  async (req, res) => {
    try {
        //const producto = await db.Producto.create(req.body);
        res.status(201).json("hola");
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

module.exports = productscontroller;