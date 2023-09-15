const alquilercontroller = {};
const { Products } = require("../models");
const { Alquiler } = require("../models/");
const { Op } = require("sequelize");
/**
 * @method POST
 * @name alquilar
 * @body {fechaInicio, fechaFin, [productos](ids de productos a alquilar)}
 * @description metodo para alquilar un producto entre 2 fechas,
 *  debemos verificar que no este alquilador entre estas fechas, si lo esta informamos que no es posible alquilar
 */
alquilercontroller.alquilar = async (req, res) => {
  try {
    req.body.fechaInicio = new Date(req.body.fechaInicio);
    req.body.fechaFin = new Date(req.body.fechaFin);
    const productos = req.body.productos
    let PrecioFinal=0

    for (let i = 0; i < productos.length; i++) {
      let producto = await Products.findByPk(productos[i]);
      if (!producto) {
        return res.status(404).json({ message: "Producto con id "+ productos[i] +" no encontrado" });
      }
      PrecioFinal = PrecioFinal+ producto.price
      // Verificar si existe un alquiler en las fechas dadas
      
      let alquilerExistente = await Alquiler.findOne({
       where:{ [Op.or]: [//si las fechas de fin  o de inicio solicitadas estan entre fechas de inicio y fin ya guardadas, no se puede alquilar
          {
              fechaInicio: {
                [Op.between]: [req.body.fechaInicio, req.body.fechaFin],
              },
          },
          {
              fechaFin: {
                [Op.between]: [req.body.fechaInicio, req.body.fechaFin],
              },
          },
        ]},
        include: [
          {
            model: Products,
            where: {
              id: productos[i],
            },
            required: true,
          },
        ],
      });
      console.log("alquilerExistente",alquilerExistente)
      if (alquilerExistente) {
        return res
          .status(400)
          .json({ message: "El producto con id "+ productos[i] +" ya esta alquilado entre esas fechas" });
      }
    }
    req.body.precioFinal = PrecioFinal
    const alq = await Alquiler.create(req.body);
    for (let i = 0; i < productos.length; i++) {
      let producto = await Products.findByPk(productos[i]);
      await alq.addProduct(producto);
    }

    return res.status(201).json({ message: "Alquiler creado con éxito" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

/**
 * @method GET
 * @name alquileres
 * @body 
 * @description metodo para obtener todos los alquileres acutales
 */

alquilercontroller.alquileres = async (req, res) => {
  try {
    const alquileres = await Alquiler.findAll({
      include: [
        {
          model: Products,
        },
      ],
    });
    return res.status(200).json(alquileres);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
}

/**
 * @method GET
 * @name alquileresById
 * @param {id} id del producto que queremos saber los alquileres
 * @description metodo para obtener futuros los alquileres de un producto
 */

alquilercontroller.alquileresById = async (req, res) => {
  try {
    const alquileres = await Alquiler.findAll({
      include: [
        {
          model: Products,
          where: {
            id: req.params.id
          }
        },
      ],
    });
    return res.status(200).json(alquileres);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
}



module.exports = alquilercontroller;
