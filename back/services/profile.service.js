// Importación de modelos desde el archivo '../models'
const {
  User,
  Rol,
  Profile,
  Experience,
  Reference,
  Language,
  ExperienceType,
  ExperienceStatus,
  Country,
  Skill,
  Formation,
  FormationStatus,
  FormationType,
  Optional,
  Marital,
  Sex,
} = require('../models');

// Definición de una constante EXPERIENCE que contiene el modelo Experience y sus relaciones
const EXPERIENCE = {
  model: Experience,
  include: [ExperienceStatus, ExperienceType, Country],
};
// Definiciòn de una constante FORMATION que contiene el modelo Formation y sus relaciones
const FORMATION = {
  model: Formation,
  include: [FormationStatus, FormationType],
};
// Definición de una constante User que contiene el modelo User y sus relaciones.
const USERS = {
  model: User,
  include: [Rol],
};
// Definición de una constante Optional que contiene el modelo Optional y sus relaciones
const OPTIONAL = {
  model: Optional,
  include: [Marital, Sex],
};

// Función asincrónica para obtener un perfil por su ID

async function getProfileById(id) {
  // Consulta el perfil por su ID, incluyendo las relaciones definidas en User, Experience ...
  const profiles = await Profile.findByPk(id, {
    include: [USERS, EXPERIENCE, Reference, Language, Skill, FORMATION, OPTIONAL],
  });
  // En caso de no encontrar el perfil, se lanza un error
  if (!profiles) {
    throw new Error('Profile not found');
  }
  // En caso de que la respuesta sea dentro del rango 200 , retorna el perfil encontrado
  return profiles;
}

// Funcion asincrónica para obtener todos los perfiles de un Usuario

async function getProfileByUserId(id) {
  try {
    // Consulta la base de datos para obtener los perfiles correspondientes al 'user_id'
    const profiles = await Profile.findAll({
      where: { user_id: id },
      include: [USERS, EXPERIENCE, Reference, Language, Skill, FORMATION, OPTIONAL],
    });
    // si no se encontraron perfiles o el array esta vacio, se lanza un error
    if (!profiles || profiles.length === 0) {
      throw new Error(`No profiles found for the user with ID ${id}`);
    }
    // En caso de que la respuesta sea dentro del rango 200, retorna el perfil encontrado
    return profiles;
  } catch (error) {
    // Manejo de errores si ocurre algún problema con la consulta
    throw new Error(`Error al obtener los perfiles para el usuario con ID ${id}`);
  }
}

// Exportamos archivos para su uso en profile.controller

module.exports = { getProfileById, getProfileByUserId };
