const { Product } = require('../models/product');

const getProducts = async (req, res) => {
  try {
    const pageAsNumber = Number.parseInt(req.query.page, 10);
    const sizeAsNumber = Number.parseInt(req.query.size, 10);

    let page = 0;
    if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
      page = pageAsNumber;
    }

    let size = 10;
    if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 10) {
      size = sizeAsNumber;
    }

    const allProducts = await Product.findAndCountAll({
      limit: size,
      offset: page * size,
    });
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(400).json('Error al cargar los datos');
  }
};
const getProdByName = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const existe = await Product.findOne(
        {
          where: {
            name,

          },
        },
      );
      res.status(200).json(existe);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al cargar los datos', error: error.message });
  }
};
module.exports = {
  getProducts,
  getProdByName,
};
