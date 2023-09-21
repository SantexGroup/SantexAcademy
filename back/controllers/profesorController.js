const profesorSevice = require('../services/profesorService');

async function createProfesor(req, res) {
  try {
    const nuevoProfesor = req.body;

    const profesorCreado = await profesorSevice.crearProfesor(nuevoProfesor);
    return res.status(201).json(profesorCreado);
  } catch (error) {
    console.error('Error al crear profesor: ', error);
    return res.status(400).json({ mensaje: 'Error al crear profesor' });
  }
}

module.exports = { createProfesor };
