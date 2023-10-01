const { docenteService } = require('../services');

const allDocentes = async (req, res, next) => {
  try {
    const docentes = await docenteService.allDocentes();
    res.status(201).json(docentes);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next();
  }
};

const createDocente = async (req, res, next) => {
  const { body } = req;
  try {
    const docente = await docenteService.createDocente(body);
    res.status(200).json(docente);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next(error);
  }
};

const updateDocente = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const docente = await docenteService.updateDocente(id, body);
    res.status(200).json(docente);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next(error);
  }
};

const getDocente = async (req, res, next) => {
  const { id } = req.params;
  try {
    const docente = await docenteService.getDocente(id);
    res.status(200).json(docente);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next(error);
  }
};

module.exports = {
    allDocentes,
    createDocente,
    updateDocente,
    getDocente
};
