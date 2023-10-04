const { Curso } = require('../models')

async function getAll() {
    const listCursos = await Curso.findAll();
    return listCursos;
}
async function getOne(id){
    const curso = await Curso.findByPk(id);
    return curso;
}

async function crearCurso(nuevoCurso) {
    try {
        const cursoCreado = await Curso.create(nuevoCurso);
        console.log('Curso creado:', cursoCreado.toJSON());
        return cursoCreado.toJSON();
    } catch (error) {
        console.error('Error al crear un nuevo curso', error);
        throw error;
    }
}

module.exports = {getAll, getOne, crearCurso}