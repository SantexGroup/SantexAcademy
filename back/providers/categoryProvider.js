const { Category, Course } = require('../models');

const createCategory = async (category) => {
    try {
        return await Category.create({
            name: category.name,
            description: category.description
        });
    } catch (err) {
        console.error('Error when creating category.', err.message);
        throw err;
    }
};

const getCategories = async () => {
    try {
        return await Category.findAll();
    } catch (err) {
        console.error('Error when fetching categories.', err.message);
        throw err;
    }
};

const getCategory = async (id) => {
    try {
        return await Category.findOne({
            where: { id },
            // Incluye sus cursos
            include: {
                model: Course,
                as: 'courses',
                through: { attributes: [] } // Omite la tabla de asociación
            }
        });
    } catch (err) {
        console.error('Error when fetching category.', err.message);
        throw err;
    }
};

const updateCategory = async (id, newValues) => {
    try {
        await Category.update({
            name: newValues.name,
            description: newValues.description
        }, {
            where: { id }
        });
        return await Category.findByPk(id);
    } catch (err) {
        console.error('Error when updating category.', err.message);
        throw err;
    }
};

const deleteCategory = async (id) => {
    try {
        return await Category.destroy({ where: { id } });
    } catch (err) {
        console.error('Error when deleting category.', err.message);
        throw err;
    }
};

const addCourse = async (categoryId, courseId) => {
    try {
        // Comprueba que la categoría y el curso existan
        const category = await Category.findByPk(categoryId);
        const course = await Course.findByPk(courseId);
        if (!category || !course) return null;

        // Comprueba que el curso no tenga la categoría
        if ( await category.hasCourse(course) ) {
            throw new Error('The course is already in the category.');
        }

        // Agrega el curso a la categoría
        await category.addCourse(courseId);

        // Devuelve el curso
        return await Course.findOne({
            where: { id: courseId },
            // Incluye sus categorías
            include: {
                model: Category,
                as: 'categories',
                through: { attributes: [] } // Omite la tabla de asociación
            }
        });
    } catch (err) {
        console.error('Error when adding course to category.', err.message);
        throw err;
    }
};

const removeCourse = async (categoryId, courseId) => {
    try {
        const category = await Category.findByPk(categoryId);
        return await category?.removeCourse(courseId);
    } catch (err) {
        console.error('Error when removing course from category.', err.message);
        throw err;
    }
};

module.exports = { createCategory, getCategories, getCategory, updateCategory, deleteCategory, addCourse, removeCourse };