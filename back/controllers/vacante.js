const { vacanteService } = require("../services");

const createVacante = async (req, res) => {
  try {
    const vacante = await vacanteService.createVacante(req.body);
    res.status(201).json(vacante);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

const getVacantesByCriteria = async (req, res) => {
  try {
    const queryOptions = req.query;
    const bodyOptions = req.body;
    const vacantes = 
      await vacanteService.getVacantesByCriteria(
        queryOptions,
        bodyOptions
    );
    res.json(vacantes);
  } catch (err) {
    res
      .status(500)
      .json({ action: "getVacantesByCriteria", error: err.message });
  }
};

const updateVacanteById = async (req, res) => {
  try {
    const { id } = req.params;
    const vacante = await vacanteService.updateVacanteById(
      id,
      req.body
    );
    res.json(vacante);
  } catch (err) {
    res
      .status(500)
      .json({ action: "updateCacanteById", error: err.message });
  }
};

const deleteVacanteById = async (req, res) => {
  try {
    const { id } = req.params;
    const vacante = await vacanteService.deleteVacanteById(id);
    res.json(vacante);
  } catch (err) {
    res
      .status(500)
      .json({ action: "deleteVacanteById", error: err.message });
  }
};
module.exports = {
  createVacante,
  getVacantesByCriteria,
  updateVacanteById,
  deleteVacanteById,
};
