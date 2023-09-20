const { cursoService } = require('../services');

const allCurso = async (req, res, next) => {
  try {
    const cursos = await cursoService.allCurso();
    res.status(201).json(cursos);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next();
  }
};

const getCurso = async (req, res, next) => {
  const { id } = req.params;
  try {
    const curso = await cursoService.getCurso(id);
    res.status(200).json(curso);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  const { id } = req.params;
  try {
    const users = await cursoService.getUsers(id);
    res.status(200).json(users);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next(error);
  }
};

const createCurso = async (req, res, next) => {
  const { body } = req;
  try {
    const curso = await cursoService.createCurso(body);
    res.status(200).json(curso);
  } catch (error) {
    console.error("Error controller crear curso:", error);
    res.status(500).json({ error: "error controller create curso" }); 
  }
};

const updateCurso = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const curso = await cursoService.updateCurso(id, body);
    res.status(200).json(curso);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next(error);
  }
};

const deleteCurso = async (req, res, next) => {
  const { id } = req.params;
  try {
    const curso = await cursoService.deleteCurso(id);
    res.status(200).json(curso);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next(error);
  }
};

const activardesactivarCurso = async (req, res, next) => {
  const { id } = req.params;
  try {
    const curso = await cursoService.activardesactivarCurso(id);
    res.status(200).json(curso);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next(error);
  }
};

module.exports = {
  allCurso,
  getUsers,
  getCurso,
  createCurso,
  updateCurso,
  deleteCurso,
  activardesactivarCurso,
};
