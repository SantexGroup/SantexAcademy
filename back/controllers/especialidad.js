const { nivelService } = require('../services');

const allEspecialidads = async (req, res, next) => {
  try {
    const especialidades = await nivelService.allEspecialidads();
    res.status(201).json(especialidades);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next();
  }
};

module.exports = {
  allEspecialidads,
};
