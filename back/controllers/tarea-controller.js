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

async function getTareaByIdOrganizacion(req, res) {
  const { usuario } = req;
  try {
    const tareas = await tareaServices.getByIdOrganizacion(usuario.id);
    return res.status(200).send(tareas);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function createTarea(req, res) {
  const {
    // eslint-disable-next-line camelcase, max-len
    name, description, coordinatorId, date, place, categoryId, cantParticipantes, duracion, hora, latitud, longitud,
  } = req.body;

  // eslint-disable-next-line max-len
  const tarea = await tareaServices.createTarea(name, description, coordinatorId, hora, date, place, categoryId, cantParticipantes, duracion, latitud, longitud);

  res.status(201).send(tarea);
}

async function editTarea(req, res) {
  const { id } = req.params;
  const {
    // eslint-disable-next-line max-len
    name, description, coordinatorId, date, place, categoryId, cantParticipantes, duracion, estado, hora, latitud, longitud,
  } = req.body;

  // eslint-disable-next-line max-len
  const tarea = await tareaServices.editTarea(id, name, description, coordinatorId, date, place, categoryId, cantParticipantes, duracion, estado, hora, latitud, longitud);
  res.status(201).send(tarea);
}

async function editEstado(req, res) {
  const { id } = req.params;
  const { nuevoEstado } = req.body; // Obtén nuevoEstado desde el cuerpo de la solicitud

  try {
    const tarea = await tareaServices.cambiarEstado(id, nuevoEstado);
    if (!tarea) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    return res.status(200).json(tarea);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function deleteTarea(req, res) {
  const { id } = req.params;

  await tareaServices.deleteTarea(id);
  res.status(200).json({ message: `Usuario con el id ${id} ha sido eliminado correctamente` });
}

module.exports = {
  // eslint-disable-next-line max-len
  getAllTarea, getTareaById, createTarea, editTarea, deleteTarea, editEstado, getTareaByIdOrganizacion,
};
