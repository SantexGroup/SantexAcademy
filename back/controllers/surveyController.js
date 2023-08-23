const surveyService = require('../services/surveyService');
const emailService = require('../utils/sendgrid');

async function createSurvey(req, res) {
  try {
    const { email, questions, surveyorId } = req.body;
    const newSurvey = await surveyService.createSurvey({
      email,
      questions,
      surveyorId,
    });
    // Enviar correo de confirmación
    let formattedQuestions = '';
    const fromName = 'Municipalidad Mina Clavero';
    const subject = 'Confirmación de encuesta realizada';
    const bodyText = 'Gracias por su participación';
    // eslint-disable-next-line no-restricted-syntax
    for (const [index, question] of Object.entries(questions)) {
      formattedQuestions += `<p><strong>Pregunta ${index}:</strong> ${question}</p>`;
    }
    await emailService.sendConfirmationEmail(
      email,
      fromName,
      subject,
      bodyText,
      formattedQuestions,
    );
    return res.status(201).json({
      message: 'Encuesta creada exitosamente y correo de confirmación enviado',
      newSurvey,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error al crear la encuesta: ${error.message}` });
  }
}

async function getSurveysByEmail(req, res) {
  try {
    const { email } = req.params;
    const surveys = await surveyService.findByEmail(email);
    res.status(200).json(surveys);
  } catch (error) {
    res
      .status(500)
      .json({
        message: `Error al obtener las encuestas por email: ${error.message}`,
      });
  }
}

async function getAllSurveys(req, res) {
  try {
    const surveys = await surveyService.findAll();
    res.status(200).json(surveys);
  } catch (error) {
    res.status(500).json({ message: 'Error al traer todas las encuestas' });
  }
}

async function getSurveyById(req, res) {
  try {
    const id = Number.parseInt(req.params.id, 10);
    const survey = await surveyService.findById(id);
    if (survey) {
      res.status(200).json(survey);
    } else {
      res.status(404).json({ message: 'Encuesta no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al traer encuesta por su id' });
  }
}

async function deleteSurvey(req, res) {
  try {
    const { id } = req.params;
    await surveyService.deleteSurvey(id);
    res.status(200).json({ message: `Se ha borrado el registro con id ${id}` });
  } catch (error) {
    res.status(500).json({
      message: `Error al intentar borrar el registro con id: ${req.params.id}`,
    });
  }
}

async function updateSurvey(req, res) {
  try {
    const { id } = req.params;
    const newData = req.body;
    const updatedSurvey = await surveyService.updateSurvey(id, newData);
    res.status(200).json(updatedSurvey);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la encuesta' });
  }
}

async function restoreSurvey(req, res) {
  const { id } = req.params;

  try {
    const restoredSurvey = await surveyService.restoreSurvey(id);

    if (!restoredSurvey) {
      return res.status(404).json({ message: 'Encuesta no encontrada' });
    }

    return res.status(200).json({ message: 'Encuesta restaurada con éxito' });
  } catch (error) {
    res
      .status(500)
      .json({
        message: `Error al intentar restaurar la encuesta con id: ${id}`,
      });
  }
}

async function getSurveysBySurveyorAndDates(req, res) {
  const { surveyorId } = req.params;
  const { startDate, endDate } = req.query;

  try {
    const surveys = await surveyService.getSurveysBySurveyorAndDates(
      surveyorId,
      startDate,
      endDate,
    );
    if (surveys) {
      res.status(200).json(surveys);
    } else {
      res.status(404).json({ message: 'No hay encuestas en el rango de fechas indicado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Existe un problema con las fechas indicadas.', startDate, endDate });
  }
}

module.exports = {
  createSurvey,
  getSurveysByEmail,
  getAllSurveys,
  getSurveyById,
  deleteSurvey,
  updateSurvey,
  restoreSurvey,
  getSurveysBySurveyorAndDates,
};
