const { Recompensa } = require('../models');

const createRecompensa = async (recompensa) => {
  try {
    const newRecompensa = await Recompensa.create(recompensa);
    return newRecompensa;
  } catch (err) {
    console.error('Error creating recompensa', err);
    throw err;
  }
};

const getRecompensa = async (id) => {
  try {
    const recompensa = await Recompensa.findByPk(id);
    return recompensa;
  } catch (err) {
    console.error('Error getting recompensa', err);
    throw err;
  }
};

const getAllRecompensas = async () => {
  try {
    const recompensas = await Recompensa.findAll();
    return recompensas;
  } catch (err) {
    console.error('Error getting recompensas', err);
    throw err;
  }
};

const updateRecompensa = async (id, recompensa) => {
  try {
    const updatedRecompensa = await Recompensa.update(recompensa, {
      where: { id },
    });
    return updatedRecompensa;
  } catch (err) {
    console.error('Error updating recompensas', err);
    throw err;
  }
};

const deleteRecompensa = async (id) => {
  try {
    const deletedRecompensa = await Recompensa.destroy({
      where: { id },
    });
    return deletedRecompensa;
  } catch (err) {
    console.error('Error deleting recompensa', err);
    throw err;
  }
};

module.exports = {
  createRecompensa,
  getRecompensa,
  getAllRecompensas,
  updateRecompensa,
  deleteRecompensa,
};
