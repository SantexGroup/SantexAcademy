const { Profesor } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function generateJWT(datosProfesor) {
  try {
    // Genera un token JWT para el usuario recién registrado
    const tokenLogin = jwt.sign({ id: datosProfesor.id, nombreUsuario: datosProfesor.nombreUsuario }, process.env.SECRET_KEY || 'grupo39', { expiresIn: '1h' });
    return tokenLogin;
  } catch (error) {
    console.error('Error al generar JWT:', error);
    throw error;
  }
}

async function crearProfesor(datosProfesor) {
  try {
   
    // Cifra la contraseña con el salt
    const contraseñaCifrada = await bcrypt.hash(datosProfesor.contraseña, 10);

    // Reemplaza la contraseña en los datos del usuario
    datosProfesor.contraseña = contraseñaCifrada;

   

   const profesorCreado = await Profesor.create(datosProfesor);

   return { profesor: profesorCreado.toJSON()};
  } catch (error) {
    console.error('Error al crear profesor:', error);
    throw error;
  }
}

async function login(nombreUsuario, contraseña) {
  try {
    
    const profesor = await Profesor.findOne({ where: { nombreUsuario } });

    if (!profesor) {
      throw new Error('Nombre de usuario o contraseña incorrectos');
    }

    
    const contrasenaValida = await bcrypt.compare(contraseña, profesor.contraseña);

    if (!contrasenaValida) {
      throw new Error('Nombre de usuario o contraseña incorrectos');
    }

    // Genera un token JWT para el usuario
    const token = generateJWT(profesor);

    return { token };
  } catch (error) {
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
module.exports = { crearProfesor, login,getAll, getById, editProfesor, deleteProfesor };
