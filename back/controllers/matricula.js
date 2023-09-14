const { matriculaService } = require('../services');

const createMatricula = async (req, res, next) => {
  const { body } = req;
  try {
    const matricula = await matriculaService.createMatricula(body);
    res.status(200).json(matricula);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next(error);
  }
};

const updateMatricula = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const matricula = await matriculaService.updateMatricula(id, body);
    res.status(200).json(matricula);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next(error);
  }
};

module.exports = {
  createMatricula,
  updateMatricula,
};
