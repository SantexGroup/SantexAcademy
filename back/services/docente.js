const { Matricula, User, Curso, Docente } = require('../models');

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
        //{
          //model: Especialidad,
          //as: 'Especialidad',  
        //},
      ],
    });

    // Devolvemos el objeto docentes
    return docentes;
  } catch (error) {
    // Manejamos el error
    console.log(error);
    return [];
  }
};

module.exports = {
  allDocentes
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