const { Survey } = require("../models");

async function createSurvey(req, res) {
  try {
    const { email, questions } = req.body;
    const newSurvey = await Survey.create({
      email: email,
      questions: questions,
    });
    res.status(201).json(newSurvey);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear la encuesta" });
  }
}
async function getSurveysByEmail(req, res) {
  try {
    const email = req.params.email;
    const surveys = await Survey.findAll({
      where: {
        email: email,
      },
    });

    res.status(200).json(surveys);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al recuperar las encuestas" });
  }
}

module.exports = {
  createSurvey,
  getSurveysByEmail,
};
