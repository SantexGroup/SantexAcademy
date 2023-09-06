// eslint-disable-next-line no-unused-vars
const { DataTypes, Sequelize } = require('sequelize');
const tareaModel = require('../models/tarea-model');
const { sequelize } = require('../models');

const Tarea = tareaModel(sequelize, DataTypes);
const models = require('../models/index');

async function getAll() {
  const listTarea = await models.tarea.findAll({
    include: [
      {
        model: models.category,
      },
      {
        model: models.coordinator,
        attributes: { exclude: ['email', 'password'] },
      },
    ],
  });
  return listTarea;
}

async function getById(id) {
  const tarea = await Tarea.findByPk(id, { include: [{ model: models.category }, { model: models.coordinator, attributes: { exclude: ['email', 'password'] } }] });

  if (tarea == null) {
    throw new Error('Tarea no encontrada');
  }

  return tarea;
}

// eslint-disable-next-line max-len
async function createTarea(name, description, coordinatorId, points, date, place, categoryId, cantParticipantes, cantInscriptos, duracion, estado) {
  const tarea = new Tarea();

  tarea.name = name;
  tarea.description = description;
  tarea.date = date;
  tarea.place = place;
  tarea.cantParticipantes = cantParticipantes;
  tarea.duracion = duracion;

  if (models.tarea.findByPk(coordinatorId)) {
    tarea.coordinatorId = coordinatorId;
  } else {
    throw new Error('El id proporcionado no coincide con las tareas registradas');
  }

  const category = await models.category.findByPk(categoryId);
  if (!category) {
    throw new Error('la categoria no fue encontrada');
  } else {
    tarea.categoryId = categoryId;
  }
  tarea.points = duracion * category.puntosPorHora;

  const tareaCreated = await tarea.save();
  return tareaCreated;
}

// eslint-disable-next-line max-len
async function editTarea(id, name, description, coordinatorId, points, date, place, categoryId, cantParticipantes, cantInscriptos, duracion, estado) {
  const tarea = await getById(id);

  if (name) {
    tarea.name = name;
  }
  if (description) {
    tarea.description = description;
  }
  if (coordinatorId) {
    tarea.coordinatorId = coordinatorId;
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

  const tareaEdited = await tarea.save();
  return tareaEdited;
}

async function cambiarEstado(id, nuevoEstado) {
  const tarea = await models.tarea.findByPk(id);
  if (nuevoEstado) {
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

async function tareaPorOrganizacion(coordinatorId) {
  const tarea = await models.tarea.findAll(coordinatorId);

  if (!tarea) {
    throw new Error('No se encuentra tarea con el id proporcionado');
  }
}

module.exports = {
  getAll, getById, createTarea, editTarea, deleteTarea, tareaPorOrganizacion, cambiarEstado,
};