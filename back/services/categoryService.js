const { CategoryProvider } = require('../providers');

const getCategories = () => CategoryProvider.getCategories();

const getCategory = (id) => CategoryProvider.getCategoryById(id);

const createCategory = (options) => CategoryProvider.createCategory(options);

const updateCategory = (id, options) => CategoryProvider.updateCategory(id, options);

const deleteCategory = (id) => CategoryProvider.deleteCategory(id);

const getCategoriesCourse = (CategoryName) => CategoryProvider.getCategoriesCourse(CategoryName);

// exports
module.exports = {
  createCategory, deleteCategory, getCategory, getCategories, updateCategory, getCategoriesCourse,
};
