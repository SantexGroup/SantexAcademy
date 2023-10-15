const categoryProvider = require('../providers/categoryProvider');

const createCategory = async (category) => await categoryProvider.createCategory(category);
const getCategories = async () => await categoryProvider.getCategories();
const getCategory = async (id) => await categoryProvider.getCategory(id);
const updateCategory = async (id, newValues) => await categoryProvider.updateCategory(id, newValues);
const deleteCategory = async (id) => await categoryProvider.deleteCategory(id);
const addCourse = async (categoryId, courseId) => await categoryProvider.addCourse(categoryId, courseId);
const removeCourse = async (categoryId, courseId) => await categoryProvider.removeCourse(categoryId, courseId);

module.exports = { createCategory, getCategories, getCategory, updateCategory, deleteCategory, addCourse, removeCourse };