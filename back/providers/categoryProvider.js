const { CourseCategory } = require("../models");

const createCategory = async (options) => {
  try {
    const newCategory = await CourseCategory.create(options);
    return newCategory;
  } catch (error) {
    throw error;
  }
};

const getCategories = async () => {
  try {
    const categories = await CourseCategory.findAll();
    return categories;

  } catch (error) {
    throw error;
  }
};

const getCategoryById = async (id) => {
  try {
    const category = await CourseCategory.findByPk(id);
    return category;

  } catch (error) {
    throw error;
  }
};
const getCategoryByName = async (name) => {
  try {
    const category = await CourseCategory.findOne({ where: { name } });
    return category;

  } catch (error) {
    throw error;
  }
};
const updateCategory = async (CategoryId, CategoryOptions) => {
  try {
    await getCategoryById(CategoryId);
    await CourseCategory.update(CategoryOptions, { where: { id: CategoryId } });
    return CourseCategory.findByPk(CategoryId);
  } catch (error) {
    throw error;
  }
};

const deleteCategory = async (CategoryId) => {
  try {
    return CourseCategory.destroy({ where: { id: CategoryId } });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createCategory,
  deleteCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  getCategoryByName,
};
