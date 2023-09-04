// eslint-disable-next-line no-unused-vars
const { DataTypes, Sequelize } = require('sequelize');
const tareaModel = require('../models/tarea-model');
const { sequelize } = require('../models');

const Tarea = tareaModel(sequelize, DataTypes);

async function getAll() {
  const listTarea = await Tarea.findAll();
  return listTarea;
}

async function getById(id) {
  const tarea = await Tarea.findByPk(id);

  if (tarea == null) {
    throw new Error('Tarea no encontrada');
  }

  return tarea;
}

// eslint-disable-next-line max-len
async function createTarea(name, description, id_coordinator, points, date, place, id_category, cant_participantes) {
  const tarea = new Tarea();

  tarea.name = name;
  tarea.description = description;
  tarea.id_coordinator = id_coordinator;
  tarea.points = points;
  tarea.date = date;
  tarea.place = place;
  tarea.id_category = id_category;
  tarea.cant_participantes = cant_participantes;

  const tareaCreated = await tarea.save();
  return tareaCreated;
}

// eslint-disable-next-line max-len
async function editTarea(id, name, description, id_coordinator, points, date, place, id_category, cant_participantes) {
  const tarea = await getById(id);

  if (name) {
    tarea.name = name;
  }
  if (description) {
    tarea.description = description;
  }
  if (id_coordinator) {
    tarea.id_coordinator = id_coordinator;
  }
  if (points) {
    tarea.points = points;
  }
  if (date) {
    tarea.date = date;
  }
  if (place) {
    tarea.place = place;
  }
  if (id_category) {
    tarea.id_category = id_category;
  }
  if (cant_participantes) {
    tarea.cant_participantes = cant_participantes;
  }

  const tareaEdited = await tarea.save();
  return tareaEdited;
}

async function deleteTarea(id) {
  const tarea = await getById(id);

  await tarea.destroy();
}

module.exports = {
  getAll, getById, createTarea, editTarea, deleteTarea,
};
