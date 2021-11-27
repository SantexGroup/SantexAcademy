const petService = require('../services/pet.services');

// TODO: Mover y adaptar esta función al controller de users
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

async function listAllPets(req, res, next) {
  try {
    let { page = 0, limit = 10, sort = 'id', order = 'asc' } = req.query; // Se asignan valores por defecto en caso que no vengan en la request
    page = parseInt(page);
    limit = parseInt(limit);

    const { count, rows } = await petService.listAllPets(
      page,
      limit,
      sort,
      order
    );
    res.status(200).json({ page, count, rows });
  } catch (error) {
    next(error);
  }
}

async function newPet(req, res, next) {
  const { name, birth_date, gender, breedId } = req.body;
  const { id } = req.user;

  try {
    const pet = await petService.newPet(name, birth_date, breedId, gender, id);
    res.status(201).json(pet);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listPets,
  newPet,
  listAllPets,
};
