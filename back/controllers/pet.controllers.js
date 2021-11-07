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
    
async function newPet(req, res, next) {
  const {
    name,
    birth_date,
    breed,
    gender
  } = req.body;
  const { id } = req.user;
  try {
    const pet = await petService.newPet(
      name,
      birth_date,
      breed,
      gender,
      id
    );
    res.status(201).json(pet);
  } catch (error) {
    next(error);
  }
}


module.exports = {
  listPets,
  newPet,
};
