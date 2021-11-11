const petModel = require('../models').pet;
const userModel = require('../models').user;
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

async function listPets(userId, page) {
  const limite = 10;
  const pets = await petModel.findAll({
    where: { userId },
    order: [['id', 'ASC']],
    // La edad la trae calculada desde el SQL en una columna virtual "age"
    // que se define en en el modelo
    attributes: ['name', 'birth_date', 'age', 'breed', 'gender'],
    include: {
      model: userModel,
      attributes: ['name', 'lastname'],
    },
    limit: limite,
    offset: (page - 1) * limite,
  });
  return pets;
}
async function listAllPets(page) {
  const limite = 10;
  const { count, rows } = await petModel.findAndCountAll({
    order: [['id', 'ASC']],
    attributes: ['name', 'birth_date', 'age', 'breed', 'gender'],
    include: {
      model: userModel,
      attributes: ['id', 'name', 'lastname'],
    },
    limit: limite,
    offset: page * limite,
  });
  return { count, rows };
}

module.exports = {
  newPet,
  listPets,
  listAllPets,
};
