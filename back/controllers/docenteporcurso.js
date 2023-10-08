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
  console.log('getDocentePorCurso:', id); 
  try {
    const docente = await docenteporcursoService.getDocentePorCurso(id);
    res.status(200).json(docente);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next(error);
  }
};
//------------------------Para ver los cursos por docente -------------------------------//
const cursoPorDocentePorIDController = async (req, res, next) => {
  const { id } = req.params;
  try {
    const cursos = await docenteporcursoService.getCursoPorDocentePorId(id);
    if (cursos.length === 0) {
      return res.status(404).json({ message: 'No se encontraron cursos habilitados para este docente.' });
    }
    res.status(200).json(cursos);
  } catch (error) {
    console.error(error);
    next(error); 
  }
};

//--------------------------------------------------------------------------------------//
const getCursosPorDocente = async (req, res, next) => {
  const { iddocente } = req.params; // Cambia a iddocente
  console.log('ID del docente recibido:', iddocente); 
  try {
    const cursospordocente = await docenteporcursoService.getCursosByDocente(iddocente);
    res.status(200).json(cursospordocente);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next(error);
  }
};

const deleteDocentePorCurso = async (req, res, next) => {
  const { id } = req.params;
  try {
    const docenteporcurso = await docenteporcursoService.deleteDocentePorCurso(id);
    res.json(docenteporcurso);
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
    getDocentePorCurso,
    cursoPorDocentePorIDController,
    getCursosPorDocente,
    deleteDocentePorCurso
};
