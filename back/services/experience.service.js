// Importacion de los models necesarios
const {
  Profile, Experience, ExperienceStatus, ExperienceType, Country,
} = require('../models');

// Obtener un experience especifico
async function getExperience(id) {
  // Buscamos el Experience objetivo con sus tablas hijas
  const thisExperience = await Experience.findByPk(id, {
    include: [Country, ExperienceStatus, ExperienceType],
  });
  if (thisExperience) {
    // Regresamos el resultado
    return thisExperience;
  }
  // Manejador de errores
  throw new Error();
}
// Obtener todos los experiences del usuario
async function getAllExperience(id) {
  // Buscamos todas los Experinces registrados
  const experiences = await Experience.findAll({
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
      // Incluimos los modelos de las tablas hijas
      {
        model: Country,
      },
      {
        model: ExperienceStatus,
      },
      {
        model: ExperienceType,
      },
    ],
    // Que no se repitan
    distinct: true,
  });
  if (experiences) {
    // Retornamos el Experinece obtenido
    return experiences;
  }
  // Manejador de errores
  throw new Error();
}
// Registro de una Experience nueva.
/*
    La misma debe realizar el registro nuevo asociado Profile.
*/
async function addExperience(
  statusId,
  countriesId,
  typesId,
  position,
  company,
  description,
  startDate,
  endDate,
) {
  // Cremos una instancia del modelo Experience, donde guardamos todos los datos.
  const newExperience = await Experience.create({
    statusId,
    countriesId,
    typesId,
    position,
    company,
    description,
    startDate,
    endDate,
  });
  if (newExperience) {
    // Retornamos las intancias de ambos modelos.
    return newExperience;
  }
  // Manejador de errores
  throw new Error();
}
// Eliminacion de Experinces especificos
async function deleteExperience(id) {
  // Buscamos el Experience por id
  const experience = await Experience.findByPk(id);
  // Si no esta marcado como deleted, entonces lo marcamos como borrado
  if (experience && experience.deletedAt === null) {
    Experience.update({
      deletedAt: new Date(),
    }, {
      where: {
        id,
      },
    });
  } else {
    // Manejador de errores
    throw new Error();
  }
}
// Actualizar una experience
async function updateExperience(
  id,
  statusId,
  countriesId,
  typesId,
  position,
  company,
  description,
  startDate,
  endDate,
) {
  // Para actialzar un experience, usaremos la funcion definida anteriormente.
  const experience = await getExperience(id);
  // Creamos un objeto con todos los datos que componen la instancia del Experience
  const updateData = {
    statusId,
    countriesId,
    typesId,
    position,
    company,
    description,
    startDate,
    endDate,
  };

  if (experience) {
    // Actualizamos el experience
    await experience.update(updateData);
    // Lo retornamos actualizado
    return experience;
  }
  // Manejador de errores.
  throw new Error();
}

async function getExperienceStatus() {
  const status = await ExperienceStatus.findAll();
  return status;
}

async function getExperienceTypes() {
  const types = await ExperienceType.findAll();
  return types;
}
// Exportacion de las funciones.
module.exports = {
  getExperience,
  getAllExperience,
  addExperience,
  deleteExperience,
  updateExperience,
  getExperienceStatus,
  getExperienceTypes,
};
