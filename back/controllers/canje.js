const { canjeService } = require("../services");



const createOrder = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId, quantity } = req.body;
    const order = await canjeService.createOrder(userId, productId, quantity);
    
    if (order) {
      res.status(201).json(order);
    } else {
      res.status(500).send('Error al crear la orden');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};


const getAllOrders = async (req, res) => {
  try {
    const orders = await canjeService.getAllOrders();
    res.status(200).json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await canjeService.getOrderById(id);
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await canjeService.deleteOrderById(id);
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  deleteOrderById,
};
