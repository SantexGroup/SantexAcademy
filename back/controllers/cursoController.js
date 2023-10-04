const cursoService = require('../services/cursoService');

async function getAllCursos(req, res){
    const cursos = await cursoService.getAll();
    res.status(200).send(cursos);
}
async function createCurso(req, res) {
    try {
        const nuevoCurso = req.body;
        console.log('estoy en createCurso en controller')
        const cursoCreado = await cursoService.crearCurso(nuevoCurso);
        console.log(cursoCreado.tojson());
        return res.status(201).json(cursoCreado);
    } catch (error) {
        console.error('Error al crear un nuevo curso: ', error);
        return res.status(400).json({ mensaje: 'Error al crear un nuevo curso' });
    }
    
}
module.exports = {getAllCursos, createCurso}