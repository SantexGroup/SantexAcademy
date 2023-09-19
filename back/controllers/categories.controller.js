const categoriescontroller = {};
const {Categories} = require('../models')

/**
 * @method POST
 * @name Crear
 * @body {name}
 * @description metodo para crear una categoria
 */
 categoriescontroller.crear = async (req, res) => {
    try {
    const categoria = await Categories.create(req.body);
    res.status(200).json(categoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

/**
 * @method PUT
 * @name editar
 * @body {name}
 * @param {id} id de la categoria que queremos editar
 * @description metodo para editar una categoria
 */
 categoriescontroller.editar = async (req, res) => {
    try {
    const categoria = await Categories.findByPk(req.params.id);
    await categoria.update(req.body);
    res.status(200).json(categoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
/**
 * @method DELETE
 * @name Borrar
 * @param {id} id de la categoria que queremos eliminar
 * @description metodo para eliminar una categoria
 */
 categoriescontroller.borrar = async (req, res) => { 
    try {
    const categoria = await Categories.findByPk(req.params.id);
    await categoria.destroy();
    res.status(200).json(categoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

/**
 * @method GET
 * @name get
 * @param {id} id de la categoria que queremos obtener
 * @description metodo para obtener los datos de una categoria con sus productos
 */
 categoriescontroller.get = async (req, res) => {
    try {
    const categoria = await Categories.findByPk(req.params.id, {
      include: [{
        model: Products,
      }],
    });
    res.status(200).json(categoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}