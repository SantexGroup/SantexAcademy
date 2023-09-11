const { ProfileReference, Profile, Reference } = require('../models');

async function getReferences(id) {
  const reference = await Reference.findByPk(id);

  if (reference) {
    return reference;
  }
  throw new Error('La referencia no existe');
}

async function getAllReferences(id) {
  // Buscamos todas los Experinces registrados
  const reference = await Reference.findAll({
    // Incluimos el modelo Profile, sin sus atributos
    include: [
      {
        model: Profile,
        attributes: [],
        where: {
          // buscamos donde el Profgiles.user_id sea igual al id indicadno por params
          user_id: id,
        },
      },
    ],
    // Que no se repitan
    distinct: true,
  });
  if (reference) {
    // Retornamos el Experinece obtenido
    return reference;
  }
  // Manejador de errores
  throw new Error();
}

async function createReference(
  name,
  lastName,
  email,
  phone,
  company,
  profileId,
) {
  const reference = await Reference.create({
    name,
    lastName,
    email,
    phone,
    company,
    profileId,
  });

  if (reference) {
    await ProfileReference.create({
      profilesId: profileId,
      referencesId: reference.id,
    });
    return reference;
  }
  throw new Error();
}

async function deleteReference(id) {
  const reference = await Reference.findByPk(id);

  if (reference && reference.deletedAt === null) {
    await Reference.update({
      deletedAt: new Date(),
    }, {
      where: {
        id,
      },
    });
  } else {
    throw new Error();
  }
}

async function updateReference(
  id,
  name,
  lastName,
  email,
  phone,
  company,
) {
  const updateDate = {
    name,
    lastName,
    email,
    phone,
    company,
  };

  const reference = await Reference.findOne({
    where: {
      id,
    },
  });

  if (reference) {
    await reference.update(updateDate);
    return reference;
  }
  throw new Error('La referencia no existe');
}

module.exports = {
  getReferences,
  getAllReferences,
  createReference,
  deleteReference,
  updateReference,
};
