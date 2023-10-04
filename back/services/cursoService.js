const { curso } = require('../models');

async function getAll() {
    const listCursos = await curso.findAll()
    return listCursos;
}
async function getOne(id) {
    const curso = await curso.findByPk(id);
    return curso;
}

async function crearCurso(nuevoCurso) {
    try {
        const cursoCreado = await curso.create(nuevoCurso);
        console.log('Curso creado:', cursoCreado.toJSON());
        return cursoCreado.toJSON();
    } catch (error) {
        console.error('Error al crear un nuevo curso', error);
        throw error;
    }
}
async function editCurso(cursoId, updatedData) {
    try {
        const curso = await getById(cursoId);

        if (!curso) {
            throw new Error('Usuario no encontrado');
        }
        curso.nombre = updatedData.nombre;
        curso.duracion = updatedData.duracion;
        curso.precio = updatedData.precio;
        curso.descripcion = updatedData.descripcion;
        await curso.save();

        return curso.toJSON();
    } catch (error) {
        throw error;
    }
}
async function deleteCurso(id) {
    const curso = await getById(id)
    await curso.destroy(id)
}
module.exports = { getAll, getOne, crearCurso , editCurso, deleteCurso}