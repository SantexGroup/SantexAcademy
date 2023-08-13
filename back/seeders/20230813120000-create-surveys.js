const faker = require("faker");

// Genera una respuesta aleatoria para cada pregunta
const generateRandomAnswers = () => {
  const questions = [
    "¿Cómo te enteraste de Mina Clavero como destino turístico?",
    "¿Qué te motivó a elegir Mina Clavero para pasar tus vacaciones?",
    "¿Qué tipo de hospedaje elegiste durante tu estadía en Mina Clavero?",
    "¿Cuál es el propósito de tu visita a Mina Clavero?",
    "¿Cuánto tiempo planeas quedarte en Mina Clavero?",
    "¿Qué actividades planeas realizar durante tu estadía en Mina Clavero?",
    "¿Qué lugares planeas visitar durante tu estadía en Mina Clavero?",
    "¿Qué tipo de transporte utilizaste para llegar a Mina Clavero?",
    "¿Qué medio de transporte utilizaste para moverte dentro de Mina Clavero?",
    "¿Cómo calificarías la calidad de los servicios turísticos en Mina Clavero?",
    "¿Cómo te comunicaste con las empresas turísticas en Mina Clavero?",
    "¿Qué tipo de material se te entregó en la Oficina de Turismo?",
    "¿Cómo evalúas el tipo de información brindada por las Oficinas de Turismo de Mina Clavero?",
    "¿Aparte de la información solicitada, se te brindó algún otro tipo de información de tu interés?",
    "¿Qué información se te brindó?",
    "¿Consideras a Mina Clavero como un destino completo en cuanto a su oferta y servicios?",
    "¿Recomendarías Mina Clavero como destino turístico?",
  ];

  const answers = {};
  questions.forEach((question) => {
    const randomAnswer = faker.lorem.sentence();
    answers[question] = randomAnswer;
  });

  return answers;
};

// Genera resultados de encuestas con datos aleatorios
const generateSurveyResults = (count) => {
  const surveyResults = [];
  for (let i = 0; i < count; i++) {
    const email = faker.internet.email();
    const answers = generateRandomAnswers();

    surveyResults.push({
      email,
      questions: JSON.stringify(answers),
      createdAt: faker.date.between("2020-01-01", "2023-08-15"), // Fechas aleatorias entre 2020-01-01 y la fecha actual
      updatedAt: faker.date.between("2020-01-01", "2023-08-15"), // Fechas aleatorias entre 2020-01-01 y la fecha actual
    });
  }
  return surveyResults;
};

const surveyResults = generateSurveyResults(1000); // Genera 10 encuestas aleatorias
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Surveys", surveyResults, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Surveys", null, {});
  },
};
