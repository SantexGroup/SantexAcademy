const { catalogoService } = require('../services');

const getCatalog = async (req, res) => {
  try {
    const catalog = await catalogoService.getCatalog(req.body);
    res.json(catalog);
  } catch (err) {
    res.status(500).json({ action: 'getCatalog', error: err.message });
  }
};

module.exports = { getCatalog };
