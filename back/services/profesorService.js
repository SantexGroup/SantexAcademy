const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Profesor } = require('../models');

function generateJWT(profesor) {
  return jwt.sign({ id: profesor.id }, 'tu_clave_secreta', { expiresIn: '1h' });
}

async function crearProfesor(datosProfesor) {
  try {
    const salt = await bcrypt.genSalt(10);
    const contraseñaCifrada = await bcrypt.hash(datosProfesor.contraseña, salt);
    datosProfesor.contraseña = contraseñaCifrada;
    
    // Crear al profesor y obtener el objeto del profesor creado
    const profesorCreado = await Profesor.create(datosProfesor);
    
    // Generar el token JWT utilizando el objeto del profesor creado
    const token = generateJWT(profesorCreado);

    return { profesor: profesorCreado.toJSON(), token };
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

    return { profesor: profesor.toJSON(), token };
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
