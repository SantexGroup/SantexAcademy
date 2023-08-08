const productscontroller = {};
const { Products } = require('../models') //--> nombre con el que se creo el modelo en primer lugar

/**
 * @method POST
 * @name create
 * @body {
 * "name":String
 * "description":String
 * "quantity": number
 * "price":number
 * "image":string
 * "status":string
 * }
 * @description metodo para crear un producto y almacenarlo en la base de datos
 */
productscontroller.create =  async (req, res) => {
    try {
      await Products.create(req.body);
      res.status(201).json("Product correctly created");
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

productscontroller.getAll =  async (req, res) => {
  try {
    const productos = await Products.findAll();
    res.status(201).json(productos);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}



module.exports = productscontroller;