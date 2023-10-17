const { curso } = require('../models');
const { Op } = require('sequelize');

async function getAll() {
    const listCursos = await curso.findAll()
    return listCursos;
}
async function getOne(id) {
    const cursoEncontrado = await curso.findByPk(id);
    return cursoEncontrado;
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
        const curso = await getOne(cursoId);

        if (!curso) {
            throw new Error('Usuario no encontrado');
        }
        curso.nombre = updatedData.nombre;
        curso.fechaInicio = updatedData.fechaInicio;
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
    const curso = await getOne(id)
    await curso.destroy(id)
}



async function buscarCursosPorNombre(nombre) {
    const condiciones = {};
    if (nombre) {
        condiciones.nombre = { [Op.like]: `%${nombre}%` };
    }

    const cursos = await curso.findAll({
        where: condiciones,
    });

    return cursos;
}

// async function buscarCursosRecientes(fechaInicio) {
//     const condiciones = {};
//     if (fechaInicio) {
//         condiciones.fechaInicio = { [Op.gte]: new Date(fechaInicio) };
//     }
//     const cursos = await curso.findAll({
//         where: condiciones,
//     });

//     return cursos;
// }

async function buscarCursosRecientes(fecha) {
    try {
      // Verifica que la fecha proporcionada sea válida
      if (!fecha || !Date.parse(fecha)) {
        throw new Error('La fecha proporcionada es inválida.');
      }
  
      const cursos = await curso.findAll({
        where: {
          fechaInicio: { [Op.gte]: fecha },
        },
      });
  
      return cursos;
    } catch (error) {
      throw error;
    }
  }
module.exports = { getAll, getOne, crearCurso, editCurso, deleteCurso, buscarCursosPorNombre,buscarCursosRecientes}