const { Profesor } = require('../models');

async function crearProfesor(datosProfesor) {
  try {
    const profesorCreado = await Profesor.create(datosProfesor);
    console.log('Profesor creado: ', profesorCreado.toJSON());
    return profesorCreado.toJSON();
  } catch (error) {
    console.error('Error al crear profesor: ', error);
    throw error;
  }
}
async function getAll() {
  const listProfesors = await Profesor.findAll()
  return listProfesors;
}
async function getById(id) {
  const profesor = await Profesor.findByPk(id)
  return profesor;


}
module.exports = { crearProfesor, getAll, getById};
