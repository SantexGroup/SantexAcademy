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

async function editProfesor(profId, updatedData){
  try {
    const profesor = await getById(profId);

    if(!profesor){
      throw new Error('Profesor no encontrado');
    }
    profesor.nombreCompleto = updatedData.nombreCompleto;
    profesor.nombreUsuario = updatedData.nombreUsuario;
    profesor.fechaNacimiento = updatedData.fechaNacimiento;
    profesor.genero = updatedData.genero;
    profesor.profesion = updatedData.profesion;
    profesor.tipoContenido = updatedData.tipoContenido;
    profesor.modalidadEnseñanza = updatedData.modalidadEnseñanza;
    profesor.correoElectronico = updatedData.correoElectronico;
    profesor.contraseña = updatedData.contraseña;

    await profesor.save();

    return profesor.toJSON();

  } catch (error) {
    throw error;    
  }
}

async function deleteProfesor(id){
  const profesor = await getById(id);
  await profesor.destroy(id)
}
module.exports = { crearProfesor, getAll, getById, editProfesor, deleteProfesor};
