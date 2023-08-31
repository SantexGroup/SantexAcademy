// Importacion de lo servicios requridos
const ExperienceService = require('../services/experience.service');
// Funcion que trae una sola Experience desde la base de datos.
async function experienceGet(
  req,
  res,
  next,
) {
  // Traemos el id desde el params
  const { id } = req.params;
  try {
    // constante que reserva el resultado de getExperience
    const thisExperience = await ExperienceService.getExperience(id);
    // Retornamos que esta ok con el 200 y enviamos la constante al front
    res.status(200).send(thisExperience);
  } catch (error) {
    // Manejador de errores
    next(error);
  }
}

async function experienceGetAll(
  req,
  res,
  next,
) {
  // Traemos el id desde el params
  const { id } = req.params;
  try {
    // constante que reserva el resultado de getAllExperience
    const experiencesAll = await ExperienceService.getAllExperience(id);
    // Retornamos que esta ok con el 201 y enviamos la constante al front
    res.status(201).send(experiencesAll);
  } catch (error) {
    // Manejador de errores
    next(error);
  }
}

async function experienceAdd(
  req,
  res,
  next,
) {
  // Traemos desde el body los valores necesarios para el nuevo Experience
  const {
    statusId,
    countriesId,
    typesId,
    position,
    company,
    description,
    startDate,
    endDate,
  } = req.body;
  try {
    // Reservamos todos los datos en la constante
    const newExperience = await ExperienceService.addExperience(
      statusId,
      countriesId,
      typesId,
      position,
      company,
      description,
      startDate,
      endDate,
    );
    // Retornamos que esta ok con el 200 y enviamos la constante al front
    res.status(200).send(newExperience);
  } catch (error) {
    // Manejador de errores.
    next(error);
  }
}

async function experienceDelete(
  req,
  res,
  next,
) {
  // Traemos el id desde el params
  const { id } = req.params;
  try {
    // constante que reserva el resultado de deleteExperience
    await ExperienceService.deleteExperience(id);
    // Retornamos el valor 200 con el mensaje de eliminacion Ok
    res.status(200).send('Registro de experience eliminado');
  } catch (error) {
    // Manejador de errores
    next(error);
  }
}

async function experienceUpdate(
  req,
  res,
  next,
) {
  // Tomaos por params el id
  const { id } = req.params;
  // Tomamos por body los datos necesarios
  const {
    statusId,
    countriesId,
    typesId,
    position,
    company,
    description,
    startDate,
    endDate,
  } = req.body;

  try {
    // constante que reserva el resultado de updateExperience
    const experience = await ExperienceService.updateExperience({
      id,
      statusId,
      countriesId,
      typesId,
      position,
      company,
      description,
      startDate,
      endDate,
    });
    // Retornamos que esta ok con el 200 y enviamos la constante al front
    res.status(200).send(experience);
  } catch (error) {
    next(error);
  }
}

async function experienceStatusGet(
  req,
  res,
  next,
) {
  try {
    const status = await ExperienceService.getExperienceStatus();
    res.status(200).send(status);
  } catch (error) {
    next(error);
  }
}

async function experienceTypesGet(
  req,
  res,
  next,
) {
  try {
    const types = await ExperienceService.getExperienceTypes();
    res.status(200).send(types);
  } catch (error) {
    next(error);
  }
}
// Exportacion de las funciones.
module.exports = {
  experienceAdd,
  experienceGet,
  experienceGetAll,
  experienceDelete,
  experienceUpdate,
  experienceStatusGet,
  experienceTypesGet,
};
