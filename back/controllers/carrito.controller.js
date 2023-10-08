const carritocontroller = {};
const { Console } = require("winston/lib/winston/transports");
const { Carrito, Products, User } = require("../models");
const { router } = require("../routes");
const sequelize = require("sequelize");
const Op = require("sequelize").Op;
/**
 * @method POST
 * @name Crear
 * @body {usuario,[productos], fechaInicio, fechaFin}
 * @description metodo para crear un carrito asociado a un usuario
 */
carritocontroller.crear = async (req, res) => {
  try {
    const carrito = await Carrito.create(req.body);
    let productos = req.body.productos;
    let usuario = await User.findByPk(req.body.usuario);
    if (!usuario) {
      res.status(400).json({ msg: "El usuario no existe" });
    }
    for (let i = 0; i < productos.length; i++) {
      let producto = await Products.findByPk(productos[i]);
      await carrito.addProduct(producto);
    }
    await carrito.setUser(usuario);
    res.status(200).json(carrito);
  } catch (error) {
    res
      .status(400)
      .json({
        msg: "Error creando el carrito intente nuevamente",
        error: error.message,
      });
  }
};
/**
 * @method POST
 * @name CrearOEditar
 * @body {usuario , [productos], fechaInicio, fechaFin}
 * @description metodo para editar un carrito existente o crear unp nuevo
 */
carritocontroller.crearOEditar = async (req, res) => {
  try {
    let carrito = await Carrito.findOne({
      where: {
        userId: req.body.usuario,
      },
    });
    if (!carrito) {
      carrito = await Carrito.create(req.body);
    } else {
      carrito = await carrito.update(req.body);
    }
    let productos = req.body.productos;
    let usuario = await User.findByPk(req.body.usuario);
    if (!usuario) {
      return res.status(400).json({ msg: "El usuario no existe" });
    }
    for (let i = 0; i < productos.length; i++) {
      let producto = await Products.findByPk(productos[i]);
      await carrito.addProduct(producto);
    }
    await carrito.setUser(usuario);
    res.status(200).json(carrito);
  } catch (error) {
    console.log(error)
    res
      .status(400)
      .json({
        msg: "Error creando el carrito intente nuevamente"})}}

/**
 * @method GET
 * @name getCarrito
 * @param {idUser} Id del usuario del que obtendremos el carrito
 * @description metodo para obtener datos de un carrito (los objetos que tiene incluidos)
 */
carritocontroller.getCarrito = async (req, res) => {
  try {
    const carrito = await Carrito.findAll({
      where: {
        userId: req.params.id,
      },
      include: [Products],
    });
    res.status(200).json(carrito);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error)
  }
};
/**
 * @method PUT
 * @name editCarrito
 * @param {idUser} Id del usuario del que obtendremos el carrito
 * @body {[idProduct], Fechafin,  FechaInicio}
 * @description metodo para obtener datos de un carrito (los objetos que tiene incluidos)
 */
carritocontroller.editCarrito = async (req, res) => {
  try {
    const carrito = await Carrito.update(req.body, {
      where: {
        idUser: req.params.id,
      },
    });
    res.status(200).json(carrito);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
/**
 * @method DELETE
 * @name deleteCarrito
 * @param {id} Id del usuario del que obtendremos el carrito (despues lo sacamos por el user)
 * @description metodo para elimiar un carrito de la base de datos
 */
carritocontroller.deleteCarrito = async (req, res) => {
  try {
    await Carrito.destroy({
      where: {
        userId: req.params.id,
      },
    });
    res.status(200).json({msg: 'Carrito eliminado correctamente'});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

/**
 * @method PUT
 * @name addProduct
 * @param {id} Id del usuario del que obtendremos el carrito
 * @body {idProduct}  
 * @description metodo para oañadoir un objeto al carrito de un usuario (si no existe carrito, la funcion lo  debe crear)
 */
  carritocontroller.addProduct = async (req, res) => {
    console.log("llego3")
    try {
      let productId = req.body.id
      let carrito = await Carrito.findOne({
        where: {
          userId: req.params.id,
        },
      });
      if (!carrito) {
        console.log(req.params.id)
        carrito = await Carrito.create()
        carrito.setUser(req.params.id)
      }
      let producto = await Products.findByPk(productId);
      await carrito.addProduct(producto);
      res.status(200).json({msg: 'Producto agregado correctamente'});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  /**
 * @method PUT
 * @name deleteProduct
 * @param {id} Id del usuario del que obtendremos el carrito
 * @body {idProduct}  
 * @description metodo para eliminar un objeto de un carrito
 */

   carritocontroller.deleteProduct = async (req, res) => {
    try {
      let productId = req.body.id
      let carrito = await Carrito.findOne({
        where: {
          userId: req.params.id,
        },
      });
      let producto = await Products.findByPk(productId);
      await carrito.removeProduct(producto);
      res.status(200).json({msg: 'Producto eliminado correctamente'});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }


module.exports = carritocontroller;
