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
/**
 * @method GET
 * @name getAll
 * @description metodo para cobtener todos los productos de la base de datos
 */
productscontroller.getAll =  async (req, res) => {
  try {
    const productos = await Products.findAll();
    res.status(201).json(productos);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}
/**
 * @method GET
 * @name getByID
 * @param {id}
 * @description metodo para cobtener todos los productos de la base de datos
 */
productscontroller.getByID =  async (req, res) => {
  try {
    const productos = await Products.findByPk(req.params.id);
    res.status(201).json(productos);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}

/**
 * @method PUT
 * @name editByID
 * @param {id}
 * @body {}
 * @description metodo para editar un producto de la base de datos
 */
productscontroller.editByID =  async (req, res) => {
  try {
    //buscamos el produto
    const producto = await Products.findByPk(req.params.id);
    if (!producto) {//si no lo encontramos informamos que no existe
      return res.status(404).json({ message: 'Product not found' });
    }
    await Products.update(req.body, { where: { id: req.params.id } });
    res.status(201).json("Product correctly updated");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}



module.exports = productscontroller;