/* eslint-disable camelcase */
const petService = require('../services/pet.services');

async function newPet(req, res, next) {
  const {
    name,
    birth_date,
    breed,
    gender,

  } = req.body;
  const { id } = req.user;
  try {
    const pet = await petService.newPet(
      name,
      birth_date,
      breed,
      gender,
      id,

    );
    res.json(pet);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  newPet,
};
