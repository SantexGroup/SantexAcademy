const alquilercontroller = {};
const { Products } = require("../models");
const { Alquiler } = require("../models/");
const { Op } = require("sequelize");
/**
 * @method POST
 * @name verificarAlquiler
 * @body {fechaInicio, fechaFin, [productos](ids de productos a alquilar)}
 * @description metodo para verificar si un alquiler puede ser realizado,
 * buscara un alquiler aprobado con las fechas y productos dle alquiler a confirmar,
 *  si encunetra el alquiler debe ser rechazado
 */
alquilercontroller.verificarAlquiler = async (req, res) => {
  try {
    req.body.fechaInicio = new Date(req.body.fechaInicio);
    req.body.fechaFin = new Date(req.body.fechaFin);
    const productos = req.body.productos;

    for (let i = 0; i < productos.length; i++) {
      let producto = await Products.findByPk(productos[i]);
      if (!producto) {
        return res.status(404).json({
          message: "Producto con id " + productos[i] + " no encontrado",
        });
      }
      PrecioFinal = PrecioFinal + producto.price;
      // Verificar si existe un alquiler en las fechas dadas

      let alquilerExistente = await Alquiler.findOne({
        where: {
          [Op.and]: [
            {
              [Op.or]: [
                //si las fechas de fin  o de inicio solicitadas estan entre fechas de inicio y fin ya guardadas, no se puede alquilar
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
              ],
            },
            {
              estado: "aprobado",
            },
          ],
        },
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
      if (alquilerExistente) {
        return res.status(200).json({
          message:
            "El producto con id " +
            productos[i] +
            " ya esta alquilado entre esas fechas, el alquiler debe ser rechazado",
          estado: 0,
        });
      }
    }
    return res
      .status(201)
      .json({ message: "El alquiler puede ser aprobado", estado: 1 });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

/**
 * @method POST
 * @name crearAlquiler
 * @body {fechaInicio, fechaFin, [productos](ids de productos a alquilar)}
 * @description metodo para pedir alquiler (se crea atuomaticamente con esado en revision)
 */
alquilercontroller.crearAlquiler = async (req, res) => {
  const productos = req.body.productos;
  let PrecioFinal = 0;
  req.body.precioFinal = PrecioFinal;
  const alq = await Alquiler.create(req.body);
  for (let i = 0; i < productos.length; i++) {
    let producto = await Products.findByPk(productos[i]);
    await alq.addProduct(producto);
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
};

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
            id: req.params.id,
          },
        },
      ],
    });
    return res.status(200).json(alquileres);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};


/**
 * @method GET
 * @name alquilerespedidos
 * @param {id} id del usuario que pidio los alquileres
 * @description metodo para obtenr los alquileres que fueron solicitado por un usario
 */

alquilercontroller.alquilerespedidos = async (req, res) => {
  try {
    const alquileres = await Alquiler.findAll({
      include: [
        {
          model: Products,
        },
      ],
      where: {
        solicitadoPor: req.params.id,
      },
    });
    return res.status(200).json(alquileres);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
}

/**
 * @method GET
 * @name alquileresgestionados
 * @param {id} id del usuario que gestiono los alquileres
 * @description metodo para obtener alquileres que fueron gestionado por un usario (tipo 1 o 2)
 */

alquilercontroller.alquileresgestionados = async (req, res) => {
  try {
    const alquileres = await Alquiler.findAll({
      include: [
        {
          model: Products,
        },
      ],
      where: {
        verificadoPor: req.params.id,
      },
    });
    return res.status(200).json(alquileres);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
}

module.exports = alquilercontroller;
