const {CategoryService}=require("../services")



const getCategories = async (req, res) => {
    try {
      const Categories = await CategoryService.getCategories();
      res.status(200).json(Categories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  const createCategory = async (req, res) => {
    const { name } = req.body;
    console.log(req.body);
  
    const newCategory = await CategoryService.createCategory({
      name,
    });
  
    res.status(201).json(newCategory);
  };



  const getByIdCategory = async (req, res) => {
    const CategoryId = req.params.CategoryId;
    try {
      const Category = await CategoryService.getCategory(CategoryId);
      res.status(200).json(Category);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  
  const updateCategory = async (req, res) => {
    const CategoryId = req.params.CategoryId;
    const {
      name,
    } = req.body;
    try {
      const newCategory = await CategoryService.updateCategory(CategoryId, {
        name,
      });
      res.status(200).json(newCategory);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const deleteCategory = async (req, res) => {
    const CategoryId = req.params.CategoryId;
    try {
      const Category = await CategoryService.deleteCategory(CategoryId);
      res.status(200).json(Category);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = {
    createCategory,
    getByIdCategory,
    getCategories,
    updateCategory,
    deleteCategory,
  };
  