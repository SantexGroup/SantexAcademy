const {CategoryProvider} = require("../providers");

const getCategories = async () => {
  return await CategoryProvider.getCategories();
};

const getCategory= async (id) => {
  return await CategoryProvider.getCategory(id);
};

const createCategory = async (options) => {
  return await CategoryProvider.createCategory(options);
};

const updateCategory = async (id, options) => {
  return await CategoryProvider.updateCategory(id, options);
};

const deleteCategory = async (id) => {
  return await CategoryProvider.deleteCategory(id);
};

//exports
module.exports = { createCategory ,deleteCategory, getCategory, getCategories, updateCategory };
