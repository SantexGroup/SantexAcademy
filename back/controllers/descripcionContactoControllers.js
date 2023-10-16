const descripcionContactoService = require('../services/descripcionContactoServices');

exports.getAllDescripciones = async (req, res) => {
  try {
    const descripciones = await descripcionContactoService.getAllDescripciones();

    res.json(descripciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDescripcionById = async (req, res) => {
  const { id } = req.params;

  try {
    const descripcion = await descripcionContactoService.getDescripcionById(id);

    res.json(descripcion);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.createDescripcion = async (req, res) => {
  const descripcionData = req.body;

  try {
    const descripcion = await descripcionContactoService.createDescripcion(descripcionData);

    res.status(201).json(descripcion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateDescripcion = async (req, res) => {
  const { id } = req.params;
  const descripcionData = req.body;

  try {
    const descripcion = await descripcionContactoService.updateDescripcion(id, descripcionData);

    res.json(descripcion);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.deleteDescripcion = async (req, res) => {
  const { id } = req.params;

  try {
    await descripcionContactoService.deleteDescripcion(id);

    res.sendStatus(204);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
