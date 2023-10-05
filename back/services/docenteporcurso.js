const { User, Docente, Curso, DocentePorCurso } = require('../models');

const allDocentesPorCurso = async () => {
  // Intentamos llamar al método findAll() al objeto docentes por curso
  try {
    const docentesporcurso = await DocentePorCurso.findAll({
      attributes: ['id', 'iddocente', 'idcurso', 'habilitado', 'estado'],
      include: [
        {
          model: Docente,
          as: 'DocenteEnDocentePorCurso', 
          include: [
            {
              model: User, 
              as: 'UserDocente', 
            },
          ],
        },
        {
          model: Curso,
          as: 'CursoEnDocentePorCurso',
        },
      ],
    });
    return docentesporcurso;
  } catch (error) {
    // Manejamos el error
    console.log(error);
    return [];
  }
};

const createDocentePorCurso = async (body) => {
  try {
    const docenteporcurso = await DocentePorCurso.create(body);
    return docenteporcurso;
  } catch (error) {
    throw new Error('Hubo un error al agregar un docente por curso.');
  }
};

const updateDocentePorCurso = async (id, body) => {
  try {
    const docenteporcurso = await DocentePorCurso.findByPk(id);
    
    if (!docenteporcurso) { 
      throw new Error('Docente por curso no encontrado.');
    }

    await docenteporcurso.update(body);
    return docenteporcurso;
  } catch (error) {
    throw new Error('Hubo un error al actualizar un docente por curso.');
  }
};

const getDocentePorCurso = async (id) => {
  try {
    const docenteporcurso = await DocentePorCurso.findByPk(id, {
      include: [
        {
          model: Docente,
          as: 'DocenteEnDocentePorCurso', 
          include: [
            {
              model: User, 
              as: 'UserDocente', 
            },
          ],
        },
        {
          model: Curso,
          as: 'CursoEnDocentePorCurso',
          
        },
      ],
    });
    console.log('1- en SERVICIO BACK docenteporcurso getDocentePorCurso:', docenteporcurso);//BORRAR
    return docenteporcurso; 
  } catch (error) {
    throw new Error('Hubo un error al obtener el docente por curso.');
  }
};

//-------------------------Metodo para ver los cursos de un docente-----------------------------//
const getCursoPorDocentePorId = async (id) => {
  try {
    const docenteporcurso = await DocentePorCurso.findOne({
      where: {
        iddocente: id,
        habilitado: true,
      },
      include: [
        {
          model: Curso,
          as: 'CursoEnDocentePorCurso',
        },
      ],
    });
    if (!docenteporcurso) {
      return [];
    }
    return docenteporcurso || [];
  } catch (error) {
    throw new Error('Hubo un error al obtener los cursos del docente habilitado.');
  }
};
//------------------------------------------------------------------------------//


module.exports = {
  allDocentesPorCurso,
  createDocentePorCurso,
  updateDocentePorCurso,
  getDocentePorCurso,
  getCursoPorDocentePorId,
};
