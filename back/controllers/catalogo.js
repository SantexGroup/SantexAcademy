const { catalogoService } = require('../services');

const getCatalog = async (req, res) => {
  try {
    const catalog = await catalogoService.getCatalog();
    res.json(catalog);
  } catch (err) {
    res.status(500).json({ action: 'getCatalog', error: err.message });
  }
};

module.exports = { getCatalog };
