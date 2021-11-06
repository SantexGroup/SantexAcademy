const petService = require('../services/pet.services');

async function listPets(req, res, next) {
  try {
    const userId = req.params.id;
    const page = req.query.page || 1;
    const pets = await petService.listPets(userId, page);
    res.status(200).json(pets);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listPets,
};
