const { CourseCategory } = require('../models');
const { Course } = require('../models');

const createCategory = async (options) => {
  const newCategory = await CourseCategory.create(options);
  return newCategory;
};
const getCategoriesCourse = async (categoryName) => {
  const categories = await CourseCategory.findOne({
    where: { name: categoryName },
    include: [
      {
        model: Course,
      },
    ],
  });
  return categories;
};
const getCategories = async () => {
  const categories = await CourseCategory.findAll();
  return categories;
};

const getCategoryById = async (id) => {
  const category = await CourseCategory.findByPk(id);
  return category;
};
const getCategoryByName = async (name) => {
  const category = await CourseCategory.findOne({ where: { name } });
  return category;
};
const updateCategory = async (CategoryId, CategoryOptions) => {
  await getCategoryById(CategoryId);
  await CourseCategory.update(CategoryOptions, { where: { id: CategoryId } });
  return CourseCategory.findByPk(CategoryId);
};

const deleteCategory = async (CategoryId) => CourseCategory.destroy({ where: { id: CategoryId } });

module.exports = {
  createCategory,
  deleteCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  getCategoryByName,
  getCategoriesCourse,
};
