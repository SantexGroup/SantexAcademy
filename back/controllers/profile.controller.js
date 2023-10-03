const { profileService } = require('../services');

/**
 * Controlador para obtener un PROFILE por su ID.
 *
 * Se Extrae los valores de los parametros de la solicitud HTTP mediante la
 * destructuracion del req.params
 *
 * Si la busqueda es exitosa, devuelve un PROFILE
 * y una respuesta HTTP con un código de estado 200 (Ok)
 *
 * Si ocurre algún error durante la operacion,
 * la función captura el error y llama a la función next,
 * lo que permite que el control pase al siguiente middleware que maneja los errores.
 */
async function getProfileById(req, res, next) {
  const { id } = req.params;

  try {
    const profile = await profileService.getProfileById(id);

    res.status(200).send(profile);
  } catch (error) {
    next(error);
  }
}

// Controlador para obetner todos los Perfiles de un Usuario
async function getProfilesByUserIdController(req, res) {
  // Desestructuración del objeto req.params para obtener directamente el userId
  const { id } = req.params;
  try {
    const profiles = await profileService.getProfileByUserId(id);
    // Respondemos con los perfiles obtenidos en formato JSON
    res.status(201).send(profiles);
  } catch (error) {
    // Manejo de errores si ocurre algún problema en el servicio
    res.status(500).json({ error: 'Error al obtener los perfiles del usuario' });
  }
}

async function profileDelete(
  req,
  res,
  next,
) {
  const { id } = req.params;
  try {
    await profileService.deleteProfile(id);
    res.status(200).send();
  } catch (error) {
    next(error);
  }
}

async function profileCreate(
  req,
  res,
  next,
) {
  const {
    userId,
    profileName,
  } = req.body;
  try {
    const newProfile = await profileService.createProfile(
      userId,
      profileName,
    );
    res.status(201).send(newProfile);
  } catch (error) {
    next(error);
  }
}

/* Tablas Intermedias */
async function experienceRelation(
  req,
  res,
  next,
) {
  const {
    profilesId,
    experiencesId,
  } = req.body;
  try {
    const newRelation = await profileService.relationExperience(
      profilesId,
      experiencesId,
    );
    res.status(201).send(newRelation);
  } catch (error) {
    next(error);
  }
}

async function formationRelation(
  req,
  res,
  next,
) {
  const {
    profilesId,
    formationsId,
  } = req.body;
  try {
    const newRelation = await profileService.relationFormation(
      profilesId,
      formationsId,
    );
    res.status(201).send(newRelation);
  } catch (error) {
    next(error);
  }
}

async function referenceRelation(
  req,
  res,
  next,
) {
  const {
    profilesId,
    referencesId,
  } = req.body;
  try {
    const newRelation = await profileService.relationReference(
      profilesId,
      referencesId,
    );
    res.status(201).send(newRelation);
  } catch (error) {
    next(error);
  }
}

async function optionalRelation(
  req,
  res,
  next,
) {
  const {
    profilesId,
    optionalsId,
  } = req.body;
  try {
    const newRelation = await profileService.relationOptional(
      profilesId,
      optionalsId,
    );
    res.status(201).send(newRelation);
  } catch (error) {
    next(error);
  }
}

async function skillRelation(
  req,
  res,
  next,
) {
  const {
    profilesId,
    skillsId,
    level,
  } = req.body;
  try {
    const newRelation = await profileService.relationSkill(
      profilesId,
      skillsId,
      level,
    );
    res.status(201).send(newRelation);
  } catch (error) {
    next(error);
  }
}

async function languageRelation(
  req,
  res,
  next,
) {
  const {
    profilesId,
    languagesId,
    level,
  } = req.body;
  try {
    const newRelation = await profileService.relationLanguage(
      profilesId,
      languagesId,
      level,
    );
    res.status(201).send(newRelation);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getProfileById,
  getProfilesByUserIdController,
  profileCreate,
  profileDelete,
  experienceRelation,
  formationRelation,
  referenceRelation,
  optionalRelation,
  skillRelation,
  languageRelation,
};
