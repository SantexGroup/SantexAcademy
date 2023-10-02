const {  especialidadService } = require('../services');

const allEspecialidades = async (req, res, next) => {
  try {
    const especialidades = await especialidadService.allEspecialidades();
    res.status(201).json(especialidades);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next();
  }
};

module.exports = {
  allEspecialidades,
};
