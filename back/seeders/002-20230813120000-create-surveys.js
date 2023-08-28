/* eslint-disable no-plusplus */
const faker = require('faker');
const { questions } = require('./data/questionsAndAnswers');

const generateRandomAnswers = () => {
  const answers = {};
  Object.keys(questions).forEach((question) => {
    const options = questions[question];
    const randomOption = faker.random.arrayElement(options);
    answers[question] = randomOption;
  });
  return answers;
};

const generateSurveyResults = async (count, surveyorIds) => {
  const surveyResults = [];
  for (let i = 0; i < count; i++) {
    const email = faker.internet.email();
    const answers = generateRandomAnswers();
    const randomSurveyorId = surveyorIds[Math.floor(Math.random() * surveyorIds.length)];
    const createdAt = faker.date.between('2015-01-01', '2023-08-15');
    const updatedAt = faker.date.between(createdAt, '2023-08-15');

    surveyResults.push({
      email,
      surveyorId: randomSurveyorId,
      questions: JSON.stringify(answers),
      createdAt,
      updatedAt,
    });
  }
  return surveyResults;
};

module.exports = {
  async up(queryInterface) {
    const surveyors = await queryInterface.sequelize.query(
      "SELECT id FROM Users WHERE rol LIKE '%encuestador%'",
    );
    const surveyorIds = surveyors[0].map((surveyor) => surveyor.id);

    const surveyResults = await generateSurveyResults(50, surveyorIds);
    await queryInterface.bulkInsert('Surveys', surveyResults, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Surveys', null, {});
  },
};
