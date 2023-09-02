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

async function createTarea(req, res) {
  const {
    name, description, idCoordinator, points, date, place, idCategory, cantParticipantes,
  } = req.body;

  // eslint-disable-next-line max-len
  const tarea = await tareaServices.createTarea(name, description, idCoordinator, points, date, place, idCategory, cantParticipantes);

  res.status(201).send(tarea);
}

async function editTarea(req, res) {
  const { id } = req.params;
  const {
    name, description, idCoordinator, points, date, place, idCategory, cantParticipantes,
  } = req.body;

  // eslint-disable-next-line max-len
  const tarea = await tareaServices.editTarea(id, name, description, idCoordinator, points, date, place, idCategory, cantParticipantes);
  res.status(201).send(tarea);
}

async function deleteTarea(req, res) {
  const { id } = req.params;

  await tareaServices.deleteTarea(id);
  res.status(200).send(`Usuario con el id ${id} ha sido eliminado correctamente`);
}

module.exports = {
  getAllTarea, getTareaById, createTarea, editTarea, deleteTarea,
};
