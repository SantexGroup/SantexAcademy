const petModel = require('../models').pet;
const userModel = require('../models').user;
const breedModel = require('../models').breed;

const GenericException = require('../exceptions/generic.exceptions');

async function checkPetName(userId, name = null) {
  const query = { userId };
  if (name) {
    query.name = name;
  }
  const pet = await petModel.findAll({ where: query });
  return pet;
}

async function petBreed(id) {
  return breedModel.findOne({ where: { id } });
}

async function newPet(name, birthDate, breedId, gender, userId) {
  const breed = await petBreed(breedId);
  const petsByuser = await checkPetName(userId, name);
  const message = `Ya existe una mascota con el nombre ${name} registrada para este usuario`;
  const msg = ` La raza ${breedId} no es valida `;

  // eslint-disable-next-line no-extra-boolean-cast
  if (!!petsByuser.length) {
    throw new GenericException(message, 409);
  }
  if (!breed) {
    throw new GenericException(msg, 409);
  }

  const pet = await petModel.create({
    name,
    birth_date: birthDate,
    breedId,
    gender,
    userId,
  });
  pet.save();
  return pet;
}

// TODO: Mover y adaptar esta función al service de users
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

async function listAllPets(page, limit, sort, order) {
  // Compone el array usado para el ordenamiento, 
  // ya que algunos campos son de modelos anidados, 
  // hay que especificar a qué modelo corresponde
  let orderBy = [];
  switch (sort) {
    case 'breed':
      orderBy = [breedModel, 'name', order];
      break;
    case 'dangerous':
      orderBy = [breedModel, 'dangerous', order];
      break;
    case 'user':
      orderBy = [userModel, 'lastname', order];
      break;
    case 'age':      
      // Este caso es especial, ya que 'age' es un campo virtual
      // al no existir en la BD no se lo puede usar para ordenamiento.
      // Se usa el campo 'birth_date' invirtiendo el orden solicitado
      orderBy = ['birth_date', order === 'asc' ? 'desc' : 'asc'];
      break;      
    default:
      orderBy = [sort, order];
      break;
  }

  const { count, rows } = await petModel.findAndCountAll({
    order: [orderBy],
    attributes: ['id', 'name', 'birth_date', 'age', 'gender'],
    include: [
      {
        model: userModel,
        attributes: ['id', 'name', 'lastname'],
      },
      {
        model: breedModel,
        attributes: ['id', 'name', 'dangerous'],
      },
    ],
    limit: limit,
    offset: page * limit,
  });
  return { page, count, rows };
}

module.exports = {
  newPet,
  listPets,
  listAllPets,
};
