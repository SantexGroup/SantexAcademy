const surveyService = require('../services/surveyService');

async function createSurvey(req, res) {
  try {
    const { email, questions, surveyorId } = req.body;
    const newSurvey = await surveyService.createSurvey({ email, questions, surveyorId });
    res.status(201).json(newSurvey);
  } catch (error) {
    res.status(500).json({ message: `Error al crear la encuesta: ${error.message}` });
  }
}

async function getSurveysByEmail(req, res) {
  try {
    const { email } = req.params;
    const surveys = await surveyService.findByEmail(email);
    res.status(200).json(surveys);
  } catch (error) {
    res.status(500).json({ message: `Error al obtener las encuestas por email: ${error.message}` });
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
    const id = Number.parseInt(req.params.id, 10);
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

module.exports = {
  createSurvey,
  getSurveysByEmail,
  getAllSurveys,
  getSurveyById,
  deleteSurvey,
  updateSurvey,
};
