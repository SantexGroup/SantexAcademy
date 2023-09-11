const { nivelService } = require('../services');

const allNivels = async (req, res, next) => {
  try {
    const cursos = await nivelService.allNivels();
    res.status(201).json(cursos);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next();
  }
};

module.exports = {
  allNivels,
};
