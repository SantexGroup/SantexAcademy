const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
    try {
        const newCategory = await categoryService.createCategory(req.body);
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(500).json({
            action: 'Crear categoría',
            message: err.message
        });
    }
};

const getCategories = async (req, res) => {
    try {
        const categories = await categoryService.getCategories();
        res.json(categories);
    } catch (err) {
        res.status(500).json({
            action: 'Obtener categorías',
            message: err.message
        });
    }
};

const getCategory = async (req, res) => {
    try {
        const category = await categoryService.getCategory(req.params.id);
        category ? res.json(category) : res.status(404).end();
    } catch (err) {
        res.status(500).json({
            action: 'Obtener categoría',
            message: err.message
        });
    }
};

const updateCategory = async (req, res) => {
    try {
        const updatedCategory = await categoryService.updateCategory(req.params.id, req.body);
        updatedCategory ? res.json(updatedCategory) : res.status(404).end();
    } catch (err) {
        res.status(500).json({
            action: 'Modificar categoría',
            message: err.message
        });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const numberOfCategoriesRemoved = await categoryService.deleteCategory(req.params.id);
        numberOfCategoriesRemoved ? res.status(204).end() : res.status(404).end();
    } catch (err) {
        res.status(500).json({
            action: 'Borrar categoría',
            message: err.message
        });
    }
};

const addCourse = async (req, res) => {
    try {
        const addedCourse = await categoryService.addCourse(req.params.categoryId, req.params.courseId);
        addedCourse ? res.json(addedCourse) : res.status(404).end();
    } catch (err) {
        res.status(500).json({
            action: 'Agregar curso a categoría',
            message: err.message
        });
    }
};

const removeCourse = async (req, res) => {
    try {
        const numberOfCoursesRemoved = await categoryService.removeCourse(req.params.categoryId, req.params.courseId);
        numberOfCoursesRemoved ? res.status(204).end() : res.status(404).end();
    } catch (err) {
        res.status(500).json({
            action: 'Quitar curso de categoría',
            message: err.message
        });
    }
};

module.exports = { createCategory, getCategories, getCategory, updateCategory, deleteCategory, addCourse, removeCourse };