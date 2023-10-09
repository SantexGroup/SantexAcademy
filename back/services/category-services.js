// eslint-disable-next-line no-unused-vars
const { DataTypes, Sequelize } = require('sequelize');
const categoryModel = require('../models/category-model');
const { sequelize } = require('../models');

const Category = categoryModel(sequelize, DataTypes);

async function getAll() {
  const listCategory = await Category.findAll();
  return listCategory;
}

async function getById(id) {
  const cat = await Category.findByPk(id);

  if (cat == null) {
    throw new Error('Categoria no encontrada');
  }

  return cat;
}

async function createCategory(name, description, dificulty, puntosPorHora) {
  const cat = new Category();

  cat.name = name;
  cat.description = description;
  cat.dificulty = dificulty;
  cat.puntosPorHora = puntosPorHora;

  const catCreated = await cat.save();

  return catCreated;
}

async function editCategory(id, name, description, dificulty, puntosPorHora) {
  const cat = await getById(id);
  if (name) {
    cat.name = name;
  }
  if (description) {
    cat.description = description;
  }
  if (dificulty) {
    cat.dificulty = dificulty;
  }
  if (puntosPorHora) {
    cat.puntosPorHora = puntosPorHora;
  }

  const catEdited = await cat.save();

  return catEdited;
}

async function deleteCategory(id) {
  const cat = await getById(id);

  await cat.destroy();
}

module.exports = {
  getAll, getById, createCategory, editCategory, deleteCategory,
};
