const {Profesor} = require('../models')
const profeorSevice = require('../services/profesorService')

async function createProfesor(req, res){
    try {
        const nuevoProfesor = req.body;

        const profesorCreado = await Profesor.create(nuevoProfesor);
        return res.status(201).json(profesorCreado);
    } catch (error) {
        console.error('Error al crear profesor: ', error);
        return res.status(500).json({mensaje: 'Error al crear profesor'})
        
    }
}

module.exports = {createProfesor} 