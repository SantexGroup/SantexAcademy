/* eslint-disable no-useless-catch */
// eslint-disable-next-line no-unused-vars
const models = require('../models/index');

async function getAll() {
  const listTarea = await models.tarea.findAll({
    include: [
      {
        model: models.category,
      },
      {
        model: models.usuario,
        attributes: { exclude: ['email', 'password'] },
      },
    ],
  });
  return listTarea;
}

async function getById(id) {
  const tarea = await models.tarea.findByPk(id, { include: [{ model: models.category }, { model: models.usuario, attributes: { exclude: ['email', 'password'] } }] });

  if (tarea == null) {
    throw new Error('Tarea no encontrada');
  }

  return tarea;
}

// eslint-disable-next-line max-len
async function createTarea(name, description, coordinatorId, hora, date, place, categoryId, cantParticipantes, duracion, latitud, longitud) {
  // if (models.tarea.findByPk(coordinatorId)) { -----------> Para que es esa validacion?
  //   tarea.usuarioId = coordinatorId;
  // } else {
  //   throw new Error('El id proporcionado no coincide con las tareas registradas');
  // }

  const category = await models.category.findByPk(categoryId);
  if (!category) {
    throw new Error('la categoria no fue encontrada');
  }

  const nuevaTarea = await models.tarea.create({
    name,
    description,
    date,
    place,
    cantParticipantes,
    duracion,
    hora,
    longitud,
    latitud,
    cantInscriptos: 0,
    usuarioId: coordinatorId,
    categoryId,
    points: duracion * category.puntosPorHora,
  });

  return nuevaTarea;
}

// eslint-disable-next-line max-len
async function editTarea(id, name, description, coordinatorId, date, place, categoryId, cantParticipantes, duracion, estado, hora, latitud, longitud) {
  const tarea = await getById(id);

  if (name) {
    tarea.name = name;
  }
  if (description) {
    tarea.description = description;
  }
  if (coordinatorId) {
    tarea.usuarioId = coordinatorId;
  }
  // eslint-disable-next-line max-len

  if (duracion || categoryId) {
    if (tarea.duracion !== duracion) tarea.duracion = duracion;

    if (tarea.categoryId !== categoryId) {
      const category = await models.category.findByPk(categoryId);
      if (!category) {
        throw new Error('la categoria no fue encontrada');
      }
      tarea.categoryId = categoryId;
      tarea.points = tarea.duracion * category.puntosPorHora;
    } else {
      tarea.points = tarea.duracion * tarea.category.puntosPorHora;
    }
  }

  if (date) {
    tarea.date = date;
  }
  if (place) {
    tarea.place = place;
  }
  if (cantParticipantes) {
    tarea.cantParticipantes = cantParticipantes;
  }
  if (estado) { // Hacer un método especial para cambiar el estado
    tarea.estado = estado;
  }

  if (hora) {
    tarea.hora = hora;
  }
  if (longitud) {
    tarea.longitud = longitud;
  }

  if (latitud) {
    tarea.latitud = latitud;
  }

  const tareaEdited = await tarea.save();
  return tareaEdited;
}

async function cambiarEstado(id, nuevoEstado) {
  const tarea = await models.tarea.findByPk(id);
  if (nuevoEstado) {
    if (tarea.estado === nuevoEstado) throw new Error('La tarea ya posee ese estado');
    tarea.estado = nuevoEstado;
    const tareaEditada = tarea.save();
    return tareaEditada;
  // eslint-disable-next-line no-else-return
  } else {
    throw new Error('No se ha proporcionado el estado de la tarea');
  }
}

async function deleteTarea(id) {
  const tarea = await getById(id);

  await tarea.destroy();
}

async function getByIdOrganizacion(coordinatorId) {
  try {
    const organizacion = await models.usuario.findOne({
      where: {
        id: coordinatorId,
      },
      include: [
        {
          model: models.rol,
          where: {
            name: 'organizacion',
          },
        },
      ],
    });

    const tareas = await models.tarea.findAll({
      where: {
        usuarioId: organizacion.id,
      },
    });

    return tareas;
  } catch (error) {
    throw new Error('Error interno del servidor');
  }
}

async function getInscriptos(id) {
  try {
    const tarea = await models.tarea.findByPk(id);
    if (!tarea) {
      throw new Error('Tarea no encontrada');
    }

    const volunteers = await tarea.getUsuarios({ attributes: { exclude: ['password', 'id', 'address'] } });
    return volunteers;
  } catch (error) {
    throw new Error(`Error al obtener voluntarios: ${error.message}`);
  }
}

const editasistio = async (idTarea, listaVoluntariosModificados) => {
  const tarea = await models.tarea.findByPk(idTarea);

  if (!tarea) throw new Error('Tarea no encontrada');
  const puntos = tarea.points;

  // eslint-disable-next-line no-restricted-syntax
  for (const voluntarioData of listaVoluntariosModificados) {
    // eslint-disable-next-line max-len, no-await-in-loop
    const tareasVoluntario = await models.tareasVoluntario.findByPk(voluntarioData.tareasVoluntario.id);

    if (!tareasVoluntario) {
      throw new Error('Registro de tareasVoluntario no encontrado');
    }

    // eslint-disable-next-line no-await-in-loop
    const voluntario = await models.usuario.findByPk(tareasVoluntario.usuarioId);

    if (voluntarioData.tareasVoluntario.asistio === true) {
      tareasVoluntario.asistio = true; // Cambiar el estado de asistencia a true
      voluntario.points += puntos; // Asignar puntos al voluntario que asistió
    } else {
      tareasVoluntario.asistio = false;
      voluntario.points -= puntos;
    }

    // eslint-disable-next-line no-await-in-loop
    await tareasVoluntario.save();
    // eslint-disable-next-line no-await-in-loop
    await voluntario.save();
  }
};

async function listadoTareasRecientes() {
  const tareas = await getAll({
    order: [['date', 'DESC']],
    limit: 5,
  });

  return tareas;
}

module.exports = {
  // eslint-disable-next-line max-len
  getAll, getById, createTarea, editTarea, deleteTarea, getByIdOrganizacion, cambiarEstado, getInscriptos, editasistio, listadoTareasRecientes,
};
