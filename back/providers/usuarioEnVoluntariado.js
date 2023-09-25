const { UsuarioEnVoluntariado, Voluntariado } = require('../models');

// Proveedor de Datos para crear la relación usuario-voluntariado
const join = async (userId, idVolunteering) => {
  try {
    const volunteeringFound = await Voluntariado.findByPk(idVolunteering);

    if (!volunteeringFound) {
      throw new Error('The volunteering does not exist.');
    }

    if (volunteeringFound.spots<=0) {
      throw new Error('The volunteering is full.');
    
    }
    await UsuarioEnVoluntariado.create({ userId, idVolunteering });

    await volunteeringFound.decrement('spots');
    
  } catch (err) {
    console.error(err);
    throw err;
  }
};


const getJoins = async (userId) => {
  try {
    const joins = await UsuarioEnVoluntariado.findAll({
      where: { userId },
      include: [{ model: Voluntariado, as: 'voluntariado', }],
    });

    return joins;
  } catch (err) {
    console.error(err);
    throw err;
  }

}


const updateStatusById = async (postulateId, status) => {
  try {
    const postulate = await UsuarioEnVoluntariado.findByPk(postulateId);

    if (!postulate) {
      throw new Error('The postulate does not exist.');
    }

    await postulate.update({ status });

  } catch (err) {
    console.error(err);
    throw err;
  }

}

const deleteJoinById = async (postulateId) => {
  try {
    const postulate = await UsuarioEnVoluntariado.findByPk(postulateId);

    if (!postulate) {
      throw new Error('The postulate does not exist.');
    }

    if (postulate.status !== 'finished' && postulate.status !== 'abandoned') {
      throw new Error('Only postulates with status "finished" or "abandoned" can be deleted.');
    }

    await postulate.update({ deletedAt: new Date() }, { where: { postulateId } });

    await postulate.increment('spots');

  } catch (err) {
    console.error(err);
    throw err;
  }
}



module.exports = { join, getJoins, updateStatusById, deleteJoinById };
