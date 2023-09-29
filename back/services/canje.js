const { canjeProvider } = require("../providers");

const createOrder = async (order) => {
  try {
    const newOrder = await canjeProvider.createOrder(order);
    return newOrder;
  }
  catch{
    return null;
  }
}


const getAllOrders = async () => {
  try {
    const orders = await canjeProvider.getAllOrders();
    return orders;
  } catch (error) {
    return null;
  }
};

const getOrderById = async (id) => {
  try {
    const order = await canjeProvider.getOrderById(id);
    return order;
  } catch (error) {
    return null;
  }
};

const deleteOrderById = async (id) => {
  try {
    const deletedOrder = await canjeProvider.deleteOrderById(id);
    return deletedOrder;
  } catch (error) {
    return null;
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  deleteOrderById,
};
