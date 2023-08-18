const { CourseCategory } = require("../models");

const createCategory = async (options) => {
  console.log(options);
  try {
    const newCategory = await CourseCategory.create(options);
    return newCategory;
  } catch (error) {
    throw error;
  }
};

const getCategories = async () => {
  try {
    const Categories = await CourseCategory.findAll();
    if (Categories) {
      return Categories;
    } else {
      throw new Error("no Categories found");
    }
  } catch (error) {
    throw error;
  }
};

const getCategory = async (id) => {
  try {
    const Category = await CourseCategory.findByPk(id);
    if (Category) {
      return Category;
    } else {
      throw new Error("no get Category found");
    }
  } catch (error) {
    throw error;
  }
};
const getCategoryByName = async (name) => {
  try {
    const user = await CourseCategory.findOne({ where: { name } });
    if (user) {
      return user;
    } else {
      throw new Error("no get Category found");
    }
  } catch (error) {
    throw error;
  }
};
const updateCategory = async (CategoryId, CategoryOptions) => {
  try {
    await getCategory(CategoryId);
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
  getCategory,
  getCategories,
  updateCategory,
  getCategoryByName,
};
