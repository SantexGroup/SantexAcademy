const { matriculaService } = require('../services');

const allMatriculas = async (req, res, next) => {
  try {
    const matriculas = await matriculaService.allMatriculas();
    res.status(201).json(matriculas);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next();
  }
};

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

const deleteMatricula = async (req, res, next) => {
  const { id } = req.params;
  try {
    const matricula = await matriculaService.deleteMatricula(id);
    res.json(matricula);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next(error);
  }
};


module.exports = {
  createMatricula,
  updateMatricula,
  allMatriculas,
  deleteMatricula
};
