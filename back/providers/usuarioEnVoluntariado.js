const { UsuarioEnVoluntariado } = require('../models');

const join = async (volunteerId, userId) => {
  try {
    const join = await UsuarioEnVoluntariado.create({
      volunteerId,
      userId,
    });
    return join;
  } catch (err) {
    console.error('The joint could not be created due to an error.', err);
    throw err;
  }
};

const count = async (volunteerId) => {
  try {
    const count = await UsuarioEnVoluntariado.count({
      where: {
        volunteerId,
      },
    });
    return count;
  } catch (err) {
    console.error('The amount of volunteers in the volunteering could not be counted due to an error.', err);
    throw err;
  }
}

module.exports = { join, count };
