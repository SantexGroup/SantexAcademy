const categoriescontroller = {};
const { Categories, Products } = require("../models");
const { router } = require("../routes");
const sequelize = require('sequelize');7
const Op = require('sequelize').Op;
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
};

/**
 * @method PUT
 * @name editByID
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
};
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
};

/**
 * @method POST //(por configuracion para poder mandar el body)
 * @name get
 * @param {ids} ids de la categorias que queremos obtener sus productos
 * @query {ids} ids de la categorias que queremos obtener sus productos
 * @description metodo para obtener los datos de una o muchas categoria con sus productos asociados
 */
categoriescontroller.get = async (req, res) => {
  try {
      const seenProductIds = new Set();
      const categorias = await Categories.findAll({
      where: {
        id: {
          [Op.in]: req.body.ids,
        },
      },
      include: [
        {
          model: Products,
        },
      ],
    });

    //borramos productos repetidos y agregamos los no repetidos a un array productos, sin categorias
    let productsFinal=[];
    categorias.forEach((categoria) => {
      let i = 0;
      while (i < categoria.Products.length) {
        const productId = categoria.Products[i].id;
        if (seenProductIds.has(productId)) {
          categoria.Products.splice(i, 1);
        } else {
           productsFinal.push(categoria.Products[i]);
          seenProductIds.add(productId);
          i++;
        }
      }
    });
    res.status(200).json(productsFinal);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
/**
 * @method GET
 * @name getAll
 * @description metodo para obtener todas las categorias con sus nombres (sin sus productos)
 */
categoriescontroller.getAll = async (req, res) => {
  try {
    const categorias = await Categories.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = categoriescontroller;
