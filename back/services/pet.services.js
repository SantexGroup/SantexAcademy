const petModel = require('../models').pet;
const GenericException = require('../exceptions/generic.exceptions');

async function checkPetName(userId, name = null) {
  const query = { userId };
  if (name) {
    query.name = name;
  }
  const pet = await petModel.findAll({ where: query });
  return pet;
}

async function newPet(name, birthDate, breed, gender, userId) {
  const petsByuser = await checkPetName(userId, name);
  const message = `Ya existe una mascota con el nombre ${name} registrada para este usuario`;

  // eslint-disable-next-line no-extra-boolean-cast
  if (!!petsByuser.length) {
    throw new GenericException(message, 409);
  }

  const pet = await petModel.create({
    name,
    birth_date: birthDate,
    breed,
    gender,
    userId,

  });
  pet.save();
  return (pet);
}

module.exports = {
  newPet,
};
