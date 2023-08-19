const { Op } = require('sequelize');
const { Survey } = require('../models');

const createSurvey = async (surveyAttr) => {
  const newSurvey = await Survey.create(surveyAttr);
  return newSurvey;
};

async function getSurveysByEmail(email) {
  try {
    const surveys = await Survey.findAll({
      where: {
        email: {
          [Op.eq]: email,
        },
      },
    });
    return surveys;
  } catch (error) {
    throw new Error(`Error al obtener las encuestas por email: ${error.message}`);
  }
}

async function findAll() {
  try {
    const surveys = await Survey.findAll({
      where: {
        status: 'activo',
      },
    });
    return surveys;
  } catch (error) {
    throw new Error('Error al traer todos los registros');
  }
}

async function findById(id) {
  try {
    const survey = await Survey.findByPk(id);
    if (survey && survey.status === 'activo') {
      return survey;
    }
    throw new Error('Encuesta no encontrada');
  } catch (error) {
    throw new Error(`Error en la consulta de un survey con id ${id}: ${error.message}`);
  }
}

async function deleteSurvey(id) {
  try {
    const survey = await Survey.findByPk(id);
    if (survey && survey.status === 'activo') {
      survey.status = 'eliminado';
      await survey.save();
      return survey;
    }
    throw new Error('Encuesta no encontrada');
  } catch (error) {
    throw new Error(`Error al eliminar una encuesta con id ${id}`);
  }
}

async function updateSurvey(id, newData) {
  try {
    const survey = await Survey.findByPk(id);

    if (!survey || survey.status !== 'activo') {
      throw new Error('Encuesta no encontrada');
    }

    // Actualizar los campos de la encuesta con los nuevos datos
    if (newData.email) {
      survey.email = newData.email;
    }
    if (newData.questions) {
      Object.assign(survey.questions, newData.questions);
    }

    await survey.save();
    return survey;
  } catch (error) {
    throw new Error(`Error al actualizar la encuesta con id ${id}: ${error.message}`);
  }
}

module.exports = {
  createSurvey,
  getSurveysByEmail,
  findAll,
  findById,
  deleteSurvey,
  updateSurvey,
};
