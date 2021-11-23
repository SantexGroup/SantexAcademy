const breedService = require('../services/breed.services');

async function listAllBreeds(req, res, next) {
  try {    
    const breeds = await breedService.listAllBreeds();
    res.status(200).json(breeds);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listAllBreeds
}