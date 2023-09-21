const { voluntariadoService } = require('../services');

const createVoluntariado = async (req, res) => {
  try {
    const volunteering = await voluntariadoService.createVoluntariado(
      req.params.idOrg,
      req.body
    );
    res.status(201).json(volunteering);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

const getVoluntariadosByCriteria = async (req, res) => {
  try {
    const queryOptions = req.query;
    const bodyOptions = req.body;
    const volunteerings = await voluntariadoService.getVoluntariadosByCriteria(
      queryOptions,
      bodyOptions
    );
    if (!volunteerings) {
      res.status(404).json({ action: 'getVoluntariadosByCriteria', error: 'Voluntariados not found.' });
    } else {
      res.json(volunteerings);
    }
  } catch (err) {
    res.status(500).json({ action: 'getVoluntariadosByCriteria', error: err.message });
  }
};

const getVoluntariadosByOrganization = async (req, res) => {
  try {
    const { idOrg } = req.params;
    const volunteerings = await voluntariadoService.getVoluntariadosByOrganization(idOrg);
    if (!volunteerings) {
      res.status(404).json({ action: 'getVoluntariadosByOrganization', error: 'Voluntariados not found.' });
    } else {
      res.json(volunteerings);
    }
  } catch (err) {
    res.status(500).json({ action: 'getVoluntariadosByOrganization', error: err.message });
  }

}

const updateVoluntariadoById = async (req, res) => {
  try {
    const { idOrg, idVoluntariado } = req.params;
    const volunteering = await voluntariadoService.updateVoluntariadoById(
      idOrg,
      idVoluntariado,
      req.body
    );
    if (!volunteering) {
      res.status(404).json({ action: 'updateVoluntariadoById', error: 'Voluntariado not found.' });
    } else {
      res.json(volunteering);
    }
  } catch (err) {
    res.status(500).json({ action: 'updateVoluntariadoById', error: err.message });
  }
};

const deleteVoluntariadoById = async (req, res) => {
  try {
    const { idVoluntariado } = req.params;
    const volunteering = await voluntariadoService.deleteVoluntariadoById(idVoluntariado);
    if (!volunteering) {
      res.status(404).json({ action: 'deleteVoluntariadoById', error: 'Voluntariado not found.' });
    } else {
      res.status(202).json(volunteering);
    }  } catch (err) {
    res.status(500).json({ action: 'deleteVoluntariadoById', error: err.message });
  }
};

module.exports = {
  getVoluntariadosByCriteria,
  getVoluntariadosByOrganization,
  createVoluntariado,
  updateVoluntariadoById,
  deleteVoluntariadoById,
};
