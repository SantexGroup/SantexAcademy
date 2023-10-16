const { validationResult } = require('express-validator');
const { CategoryService } = require('../services');

const getCategories = async (req, res) => {
  try {
    const categories = await CategoryService.getCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const createCategory = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({
      errors: result.array(),
    });
  }
  const { name } = req.body;
  try {
    const newCategory = await CategoryService.createCategory({
      name,
    });

    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getCategoryById = async (req, res) => {
  const categoryId = req.params.CategoryId;
  try {
    const category = await CategoryService.getCategory(categoryId);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateCategory = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({ errors: result.array() });
  }
  const categoryId = req.params.CategoryId;
  const { name } = req.body;
  try {
    const newCategory = await CategoryService.updateCategory(categoryId, {
      name,
    });
    return res.status(200).json(newCategory);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteCategory = async (req, res) => {
  const categoryId = req.params.CategoryId;
  try {
    const category = await CategoryService.deleteCategory(categoryId);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getCategoriesCourse = async (req, res) => {
  const { CategoryName } = req.params;
  try {
    const category = await CategoryService.getCategoriesCourse(CategoryName);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  createCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  deleteCategory,
  getCategoriesCourse,
};
