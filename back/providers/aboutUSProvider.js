const { AboutUS } = require('../models');

const createAboutUS = async (options) => {
  try {
    const newAboutUS = await AboutUS.create(options);
    return newAboutUS;
  } catch (error) {
    throw ('Error:', error);
  }
};

const getAboutUSById = async (id) => {
  try {
    const aboutUS = await AboutUS.findByPk(id);
    return aboutUS;
  } catch (error) {
    throw ('Error:', error);
  }
};

const getAboutUSs = async () => {
  try {
    const options = {
      include: [{ all: true }],
    };
    const aboutUSs = await AboutUS.findAll(options);
    return aboutUSs;
  } catch (error) {
    throw ('Error:', error);
  }
};

const updateAboutUS = async (aboutUSId, aboutUSOptions) => {
  try {
    await AboutUS.update(aboutUSOptions, { where: { id: aboutUSId } });
    return getAboutUSById(aboutUSId);
  } catch (error) {
    throw ('Error:', error);
  }
};

const deleteAboutUS = async (aboutUSId) => {
  try {
    return await AboutUS.destroy(
      { where: { id: aboutUSId } },
    );
  } catch (error) {
    throw ('Error:', error);
  }
};

module.exports = {
  createAboutUS,
  deleteAboutUS,
  getAboutUSById,
  getAboutUSs,
  updateAboutUS,
};
