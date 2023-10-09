const { AboutUSProvider } = require('../providers');

const getAboutUSs = async () => AboutUSProvider.getAboutUSs();
const getAboutUSById = async (id) => AboutUSProvider.getAboutUSById(id);
const updateAboutUS = async (id, options) => AboutUSProvider.updateAboutUS(id, options);
const deleteAboutUS = async (id) => AboutUSProvider.deleteAboutUS(id);
const createAboutUS = async (options) => AboutUSProvider.createAboutUS(options);

module.exports = {
  getAboutUSById, getAboutUSs, updateAboutUS, deleteAboutUS, createAboutUS,
};
