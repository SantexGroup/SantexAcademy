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

//------------ nuevo get para recuperar el docentId desde el userId--------------------//
const obtenerDocenteIdPorUserId = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const docenteId = await docenteService.getDocenteIdByUserId(userId);

    if (docenteId !== null) {
      res.status(200).json(docenteId);
    } else {
      res.status(404).json({ message: 'No se encontró un docente para el id ingresado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'En back/controller/docente.js: Error al obtener el docenteId' });
  }
};
//---------------------------------------------------------------------------------------//

module.exports = {
    allDocentes,
    createDocente,
    updateDocente,
    getDocente,
    obtenerDocenteIdPorUserId,
};
