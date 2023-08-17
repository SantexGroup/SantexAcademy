/* eslint-disable consistent-return */
const { Surveyor, Survey } = require('../models');

// Operación de Creación de Encuestador
exports.createSurveyor = async (req, res) => {
  try {
    const newSurveyor = await Surveyor.create(req.body);
    return res.status(201).json(newSurveyor);
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear el encuestador.' });
  }
};

// Operación de Obtención de todos los Encuestadores
exports.getAllSurveyors = async (req, res) => {
  try {
    const surveyors = await Surveyor.findAll();
    return res.status(200).json(surveyors);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Error al obtener los encuestadores.' });
  }
};

// Operación de obtención de un encuestador por su id
exports.getSurveyorById = async (req, res) => {
  try {
    const surveyorId = req.params.id;
    const surveyor = await Surveyor.findByPk(surveyorId);
    if (surveyor) {
      // Si existe retorna la respuesta con éxito y el encuestador encontrado en base a su ID
      return res.status(200).json(surveyor);
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Error al encontrar el encuestador.' });
  }
};

// Operación de obtención de encuestas realizadas por un encuestador específico

exports.getSurveysBySurveyorId = async (req, res) => {
  try {
    const surveyorId = req.params.id;
    const surveyor = await Surveyor.findByPk(surveyorId);
    if (!surveyor) {
      return res.status(404).json({ error: 'Encuestador no encontrado.' });
    }

    // Buscar todas las encuestas realizadas por el encuestador
    const surveys = await Survey.findAll({
      where: { surveyorId },
    });

    // Responder con las encuestas encontradas
    return res.status(200).json(surveys);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener las encuestas.' });
  }
};

// Operación de Actualización de Encuestador por ID
exports.updateSurveyor = async (req, res) => {
  try {
    const surveyorId = req.params.id;
    const updatedSurveyor = await Surveyor.update(req.body, {
      where: { id: surveyorId },
    });
    return res.status(200).json(updatedSurveyor);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Error al actualizar el encuestador.' });
  }
};

// Operación de Eliminación de Encuestador por ID
exports.deleteSurveyor = async (req, res) => {
  try {
    const surveyorId = req.params.id;
    await Surveyor.destroy({
      where: { id: surveyorId },
    });
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ error: 'Error al eliminar el encuestador.' });
  }
};
