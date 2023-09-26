const { recompensaProvider } = require('../providers');

const createRecompensa = async (recompensa) => {
  const newRecompensa = await recompensaProvider.createRecompensa(recompensa);
  return newRecompensa;
};

const getRecompensa = async (id) => {
  const recompensa = await recompensaProvider.getRecompensa(id);
  if (recompensa) {
    return recompensa;
  }
  return null;
};

const getAllRecompensas = async () => {
  const recompensas = await recompensaProvider.getAllRecompensas();
  if (recompensas) {
    return recompensas;
  }
  return null;
};

const updateRecompensa = async (id, recompensa) => {
  const updatedRecompensa = await recompensaProvider.updateRecompensa(id, recompensa);
  return updatedRecompensa;
};

const deleteRecompensa = async (id) => {
  const deletedRecompensa = await recompensaProvider.deleteRecompensa(id);
  return deletedRecompensa;
};

module.exports = {
  createRecompensa,
  getRecompensa,
  getAllRecompensas,
  updateRecompensa,
  deleteRecompensa,
};
