const breedService = require('../services/breed.services');

async function breedsList(req, res, next) {
  try {
    const list = await breedService.getAll();
    res.json(list);
  } catch (error) {
    next(error);
  }
}

async function breedInfo(req, res, next) {
  try {
    const { id } = req.params;
    const breedData = await breedService.getOne({
      id,
    });
    res.json(breedData);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  breedsList,
  breedInfo,
};
