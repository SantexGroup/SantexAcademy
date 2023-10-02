const { docenteporcursoService } = require('../services');

const allDocentesPorCurso = async (req, res, next) => {
  try {
    const docentes = await docenteporcursoService.allDocentesPorCurso();
    res.status(201).json(docentes);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next();
  }
};

const createDocentePorCurso = async (req, res, next) => {
  const { body } = req;
  try {
    const docente = await docenteporcursoService.createDocentePorCurso(body);
    res.status(200).json(docente);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next(error);
  }
};

const updateDocentePorCurso = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const docente = await docenteporcursoService.updateDocentePorCurso(id, body);
    res.status(200).json(docente);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next(error);
  }
};

const getDocentePorCurso = async (req, res, next) => {
  const { id } = req.params;
  try {
    const docente = await docenteporcursoService.getDocentePorCurso(id);
    res.status(200).json(docente);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next(error);
  }
};

module.exports = {
    allDocentesPorCurso,
    createDocentePorCurso,
    updateDocentePorCurso,
    getDocentePorCurso
};
