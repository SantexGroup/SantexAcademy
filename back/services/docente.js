const { Matricula, User, Curso, Docente, Especialidad } = require('../models');

const allDocentes = async () => {
  // Intentamos llamar al método findAll() al objeto docentes
  try {
    const docentes = await Docente.findAll({
      attributes: ['id', 'idusuario', 'idespecialidad', 'habilitado', 'estado'],
      include: [
        {
          model: User,
          as: 'UserDocente', 
        },
        {
          model: Especialidad,
          as: 'Especialidad',  
        },
      ],
      where: {
        estado: 'A',
      },
    });

    // Devolvemos el objeto docentes
    return docentes;
  } catch (error) {
    // Manejamos el error
    console.log(error);
    return [];
  }
};

const createDocente = async (body) => {
  try {
    const docente = await Docente.create(body);
    return docente;
  } catch (error) {
    throw new Error('Hubo un error al agregar un docente.');
  }
};

const updateDocente = async (id, body) => {
  try {
    const docente = await Docente.findByPk(id);
    
    if (!docente) { 
      throw new Error('Docente no encontrado.');
    }

    await docente.update(body);
    return docente;
  } catch (error) {
    throw new Error('Hubo un error al actualizar un docente.');
  }
};

const getDocente = async (id) => {
  try {
    const user = await Docente.findByPk(id, {
      include: [
        {
          model: User,
          as: 'UserDocente', 
        },
        {
          model: Especialidad,
          as: 'Especialidad',  
        },
      ],
      where: {
        estado: 'A',
      },
    });
    return user;
  } catch (error) {
    throw new Error('Hubo un error al obtener el docente.');
  }
};

//------------ nuevo get para recuperar el docentId desde el userId--------------------//
const getDocenteIdByUserId = async (userId) => {
  try {
    const docente = await Docente.findOne({
      where: {
        idusuario: userId,
        estado: 'A'
      }
    });
    if (docente) {
      return docente.id;
    } else {
      console.log('No se encuentra docente con el id de usuario seleccionado.')
      return null;
    }
  } catch (error) {
    throw new Error('En back/services/docente.js Hubo un error en la búsqueda');
  }
};
//---------------------------------------------------------------------------------------//

const deleteDocente = async (id) => {
  try {
    const docente = await Docente.findByPk(id);
    if (!docente) {
      throw new Error('Docente no encontrado.');
    }

    await docente.update({ estado: 'B' });
    return docente; // Cambiado de 'user' a 'docente'
  } catch (error) {
    throw new Error('Hubo un error al eliminar el docente.');
  }
};


module.exports = {
  allDocentes,
  createDocente,
  updateDocente,
  getDocente,
  getDocenteIdByUserId,
  deleteDocente
};

/*
 const docentes = await Docente.findAll({
    attributes: ['id', 'idusuario', 'idespecialidad', 'habilitado', 'estado'],
    include: [
      {
        model: User,
        as: 'UserDocente', 
      },
      {
        model: Especialidad,
        as: 'Especialidad',  
      },
    ],
    where: {
      estado: 'A',
    },
  });
*/