const cursadoPorAlumnoService = require('../services');


const createCursadoPorAlumno = async (req, res) => {
  try {
    const { userId, courseId, notas, notaFinal, asistencia, condAsistencia } = req.body;
    const cursadoPorAlumno = await cursadoPorAlumnoService.createCursadoPorAlumno(userId, courseId, notas, notaFinal, asistencia, condAsistencia);
    res.status(201).json(cursadoPorAlumno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getCursadoPorAlumnoById = async (req, res) => {
  try {
    const id = req.params.id;
    const cursadoPorAlumno = await cursadoPorAlumnoService.getCursadoPorAlumnoById(id);
    if (!cursadoPorAlumno) {
      res.status(404).json({ error: 'Registro no encontrado' });
    } else {
      res.json(cursadoPorAlumno);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const updateCursadoPorAlumnoById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const updatedRowsCount = await cursadoPorAlumnoService.updateCursadoPorAlumnoById(id, updatedData);
    if (updatedRowsCount === 0) {
      res.status(404).json({ error: 'Registro no encontrado' });
    } else {
      res.json({ message: 'Registro actualizado exitosamente' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const deleteCursadoPorAlumno = async (req, res) => {
  try {
    const id = req.params.id;
    const cursadoPorAlumno = await cursadoPorAlumnoService.deleteCursadoPorAlumno(id);
    if (!cursadoPorAlumno) {
      res.status(404).json({ error: 'Registro no encontrado' });
    } else {
      res.json({ message: 'Registro marcado como inactivo' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCursadoPorAlumno,
  getCursadoPorAlumnoById,
  updateCursadoPorAlumnoById,
  deleteCursadoPorAlumno,
};