const profesorSevice = require('../services/profesorService');
const { Profesor } = require('../models');

async function createProfesor(req, res) {
  try {
    const nuevoProfesor = req.body;
    const {nombreUsuario} = req.body.nombreUsuario
    // Verificar que si existe un profesor con igual nombre de usuario
    let profesor = await Profesor.findOne(nombreUsuario) || null;
    if (profesor !== null) {
      return res.status(205).json({ msg: 'Profesor con nombre de Usuario ya existente' })
    }
    const profesorCreado = await profesorSevice.crearProfesor(nuevoProfesor);
    return res.status(201).json(profesorCreado);
  } catch (error) {
    console.error('Error al crear profesor: ', error);
    return res.status(400).json({ mensaje: 'Error al crear profesor' });
  }
}
async function getAllProfesors(req, res) {
  const profesors = await profesorSevice.getAll();
  res.status(200).send(profesors);
}

async function getProfesorById(req, res, next) {
  const { id } = req.params;
  try {
    const profesor = await profesorSevice.getById(id);
    if (profesor != null) {
      return res.status(200).send(profesor);
    } else {
      res.status(404).json({ mensaje: 'Error al buscar profesor' })
    }

  } catch (error) {
    next(error)

  }
}

async function editProfesor(req, res) {
  try {
    const profId = req.params.id;
    const updatedProfData = req.body;

    const profesor = await profesorSevice.editProfesor(profId, updatedProfData);

    return res.status(200).json({ mensaje: 'Profesor actualizado correctamente', profesor: profesor });
  } catch (error) {
    console.error('Error al editar profesor: ', error);
    return res.status(400).json({ mensaje: 'Error al editar profesor' });
  }
}
async function deleteProfesor(req, res) {
  const { id } = req.params;
  await profesorSevice.deleteProfesor(id);
  return res.status(200).send(`Profesor con el ${id} ha sido eliminado exitosamente`);
}
module.exports = { createProfesor, getAllProfesors, getProfesorById, editProfesor, deleteProfesor };
