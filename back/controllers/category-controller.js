const categoryServices = require('../services/category-services');

async function getAllCategory(req, res) {
  const cats = await categoryServices.getAll();
  res.status(200).send(cats);
}

async function getCategoryById(req, res, next) {
  const { id } = req.params;

  try {
    const cat = await categoryServices.getById(id);
    res.status(200).send(cat);
  } catch (error) {
    next(error);
  }
}

async function createCategory(req, res) {
  const {
    name, description, dificulty, puntosPorHora,
  } = req.body;

  const cat = await categoryServices.createCategory(name, description, dificulty, puntosPorHora);

  res.status(201).send(cat);
}

async function editCategory(req, res) {
  const { id } = req.params;
  const {
    name, description, dificulty, puntosPorHora,
  } = req.body;

  const cat = await categoryServices.editCategory(id, name, description, dificulty, puntosPorHora);
  res.status(201).send(cat);
}

async function deleteCategory(req, res) {
  const { id } = req.params;
  await categoryServices.deleteCategory(id);

  res.status(200).send(`Categoria con id ${id} ha sido eliminada exitosamente`);
}

module.exports = {
  getAllCategory, getCategoryById, createCategory, editCategory, deleteCategory,
};
