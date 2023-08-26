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
        email,
      },
    });
    return surveys;
  } catch (error) {
    throw new Error(
      `Error al obtener las encuestas por email: ${error.message}`,
    );
  }
}

async function findAll() {
  try {
    const surveys = await Survey.findAll();
    return surveys;
  } catch (error) {
    throw new Error('Error al traer todos los registros');
  }
}

async function findById(id) {
  try {
    const survey = await Survey.findByPk(id);
    if (survey) {
      return survey;
    }
    throw new Error('Usuario no encontrado');
  } catch (error) {
    throw error(`Error en la consulta de un survey con id ${id}:`, error);
  }
}

async function deleteSurvey(id) {
  try {
    const survey = await Survey.findByPk(id);
    if (survey) {
      await survey.destroy();
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

    if (!survey) {
      throw new Error('Encuesta no encontrada');
    }

    if (newData.email) {
      survey.email = newData.email;
    }
    if (newData.questions) {
      Object.assign(survey.questions, newData.questions);
    }

    await survey.save();
    return survey;
  } catch (error) {
    throw new Error(
      `Error al actualizar la encuesta con id ${id}: ${error.message}`,
    );
  }
}

async function restoreSurvey(id) {
  try {
    const deletedSurvey = await Survey.findByPk(id, { paranoid: false });

    if (!deletedSurvey) {
      throw new Error('Encuesta no encontrada');
    }

    if (deletedSurvey.deletedAt === null) {
      throw new Error('La encuesta no está eliminada');
    }

    const restoredSurvey = await Survey.restore({ where: { id } });
    return restoredSurvey;
  } catch (error) {
    throw new Error(
      `Error al restaurar la encuesta con id ${id}: ${error.message}`,
    );
  }
}

async function getSurveysBySurveyorAndDates(surveyorId, startDate, endDate) {
  const surveys = await Survey.findAll({
    where: {
      surveyorId,
      createdAt: {
        [Op.between]: [startDate, endDate],
      },
    },
  });

  return surveys;
}

module.exports = {
  createSurvey,
  getSurveysByEmail,
  findAll,
  findById,
  deleteSurvey,
  updateSurvey,
  restoreSurvey,
  getSurveysBySurveyorAndDates,
};
