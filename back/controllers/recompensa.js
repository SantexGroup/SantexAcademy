const { recompensaService } = require('../services');

const createRecompensa = async (req, res) => {
  try {
    const recompensa = await recompensaService.createRecompensa(req.body);
    res.status(201).json(recompensa);
  } catch (err) {
    res.status(500).json({ action: 'createRecompensa', error: err.message });
  }
};

const getRecompensa = async (req, res) => {
  try {
    const recompensa = await recompensaService.getRecompensa(req.params.id);
    if (!recompensa) {
      res.status(404).json({ action: 'getRecompensa', error: 'Recompensa not found.' });
    } else {
      res.json(recompensa);
    }
  } catch (err) {
    res.status(500).json({ action: 'getRecompensa', error: err.message });
  }
};

const getAllRecompensas = async (req, res) => {
  try {
    const recompensas = await recompensaService.getAllRecompensas();
    if (!recompensas) {
      res.status(404).json({ action: 'getAllRecompensas', error: 'Recompensas not found.' });
    } else {
      res.json(recompensas);
    }
  } catch (err) {
    res.status(500).json({ action: 'getAllRecompensas', error: err.message });
  }
};

const updateRecompensa = async (req, res) => {
  try {
    const updatedRecompensa = await recompensaService.updateRecompensa(req.params.id, req.body);
    res.status(204).json(updatedRecompensa);
  } catch (err) {
    res.status(500).json({ action: 'updateRecompensa', error: err.message });
  }
};

const deleteRecompensa = async (req, res) => {
  try {
    const deletedRecompensa = await recompensaService.deleteRecompensa(req.params.id);
    res.json(deletedRecompensa);
  } catch (err) {
    res.status(500).json({ action: 'deleteRecompensa', error: err.message });
  }
};

module.exports = {
  createRecompensa,
  getRecompensa,
  getAllRecompensas,
  updateRecompensa,
  deleteRecompensa,
};
