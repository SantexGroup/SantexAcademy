const tareaServices = require('../services/tarea-services');

async function getAllTarea(req, res) {
  const tarea = await tareaServices.getAll();
  res.status(200).send(tarea);
}

async function getTareaById(req, res, next) {
  const { id } = req.params;
  try {
    const tarea = await tareaServices.getById(id);
    res.status(200).send(tarea);
  } catch (error) {
    next(error);
  }
}

async function getTareaByIdOrganizacion(req, res, next) {
  const { usuario } = req;
  try {
    const tareas = await tareaServices.getByIdOrganizacion(usuario.id);
    return res.status(200).send(tareas);
  } catch (error) {
    next(error);
  }
}

async function createTarea(req, res, next) {
  const {
    // eslint-disable-next-line camelcase, max-len
    name, description, coordinatorId, date, place, categoryId, cantParticipantes, duracion, hora, latitud, longitud,
  } = req.body;

  try {
  // eslint-disable-next-line max-len
    const tarea = await tareaServices.createTarea(name, description, coordinatorId, hora, date, place, categoryId, cantParticipantes, duracion, latitud, longitud);
    res.status(201).send(tarea);
  } catch (error) {
    next(error);
  }
}

async function editTarea(req, res, next) {
  const { id } = req.params;
  const {
    // eslint-disable-next-line max-len
    name, description, coordinatorId, date, place, categoryId, cantParticipantes, duracion, estado, hora, latitud, longitud,
  } = req.body;

  try {
  // eslint-disable-next-line max-len
    const tarea = await tareaServices.editTarea(id, name, description, coordinatorId, date, place, categoryId, cantParticipantes, duracion, estado, hora, latitud, longitud);
    res.status(201).send(tarea);
  } catch (error) {
    next(error);
  }
}

async function editEstado(req, res, next) {
  const { id } = req.params;
  const { nuevoEstado } = req.body; // Obtén nuevoEstado desde el cuerpo de la solicitud

  try {
    const tarea = await tareaServices.cambiarEstado(id, nuevoEstado);
    if (!tarea) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    return res.status(200).json(tarea);
  } catch (error) {
    next(error);
  }
}

async function deleteTarea(req, res, next) {
  const { id } = req.params;
  try {
    await tareaServices.deleteTarea(id);
    res.status(200).json({ message: `Usuario con el id ${id} ha sido eliminado correctamente` });
  } catch (error) {
    next(error);
  }
}

async function getVolunteersForTask(req, res) {
  try {
    const { id } = req.params;
    const volunteers = await tareaServices.getInscriptos(id);
    res.status(200).send(volunteers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  // eslint-disable-next-line max-len
  getAllTarea, getTareaById, createTarea, editTarea, deleteTarea, editEstado, getTareaByIdOrganizacion, getVolunteersForTask,
};
