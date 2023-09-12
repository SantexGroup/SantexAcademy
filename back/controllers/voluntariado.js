const { voluntariadoService } = require('../services');

const createVoluntariado = async (req, res) => {
  try {
    const voluntariado = await voluntariadoService.createVoluntariado(
      req.params.idOrg,
      req.body
    );
    res.status(201).json(voluntariado);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

const getVoluntariadosByCriteria = async (req, res) => {
  try {
    const queryOptions = req.query;
    const bodyOptions = req.body;
    const voluntariados = await voluntariadoService.getVoluntariadosByCriteria(
      queryOptions,
      bodyOptions
    );
    res.json(voluntariados);
  } catch (err) {
    res.status(500).json({ action: 'getVoluntariadosByCriteria', error: err.message });
  }
};

const updateVoluntariadoById = async (req, res) => {
  try {
    const { idOrg, idVoluntariado } = req.params;
    const voluntariado = await voluntariadoService.updateVoluntariadoById(
      idOrg,
      idVoluntariado,
      req.body
    );
    res.json(voluntariado);
  } catch (err) {
    res.status(500).json({ action: 'updateVoluntariadoById', error: err.message });
  }
};

const deleteVoluntariadoById = async (req, res) => {
  try {
    const { idVoluntariado } = req.params;
    const volunteering = await voluntariadoService.deleteVoluntariadoById(idVoluntariado);
    res.json(volunteering);
  } catch (err) {
    res.status(500).json({ action: 'deleteVoluntariadoById', error: err.message });
  }
};

module.exports = {
  getVoluntariadosByCriteria,
  createVoluntariado,
  updateVoluntariadoById,
  deleteVoluntariadoById,
};
