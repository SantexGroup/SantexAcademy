const surveyProvider = require('../providers/surveyProvider');

const createSurvey = async (survey) => {
  const newSurvey = await surveyProvider.createSurvey(survey);
  return newSurvey;
};

const findByEmail = async (email) => {
  const surveys = await surveyProvider.getSurveysByEmail(email);
  return surveys;
};

const findAll = async () => {
  const surveys = await surveyProvider.findAll();
  return surveys;
};

const findById = async (id) => {
  const survey = await surveyProvider.findById(id);
  return survey;
};

const deleteSurvey = async (id) => {
  await surveyProvider.deleteSurvey(id);
};

const updateSurvey = async (id, newData) => {
  const surveyUpdate = await surveyProvider.updateSurvey(id, newData);
  return surveyUpdate;
};

const restoreSurvey = async (id) => {
  const surveyRestored = await surveyProvider.restoreSurvey(id);
  return surveyRestored;
};

const getSurveysBySurveyorAndDates = async (id, startDate, endDate) => {
  const surveys = await surveyProvider.getSurveysBySurveyorAndDates(id, startDate, endDate);
  return surveys;
};

module.exports = {
  createSurvey,
  findByEmail,
  findAll,
  findById,
  deleteSurvey,
  updateSurvey,
  restoreSurvey,
  getSurveysBySurveyorAndDates,
};
