
const { curso } = require('../models');
const cursoService = require('../services/cursoService');

async function getAllCursos(req, res) {
  try {
    const cursos = await cursoService.getAll();
    res.status(200).send(cursos);

  } catch (error) {
    console.log(error);
    res.status(404).json({ mensaje: 'Error al buscar un curso' });
  }
}
async function getCursoById(req, res, next) {
  const { id } = req.params;
  try {
    const curso = await cursoService.getOne(id);
    if (curso != null) {
      return res.status(200).send(curso);
    } else {
      res.status(404).json({ mensaje: 'Error al buscar curso' })
    }

  } catch (error) {
    next(error)

  }

}
async function createCurso(req, res) {
  try {
    const nuevoCurso = req.body;
    const { nombre } = req.body.nombre
    // Verificar que si existe un curso con igual nombre
    let curso = await curso.findOne(nombre) || null;
    if (curso !== null) {
      return res.status(205).json({ msg: 'Curso con ese nombre ya existente' })
    }
    const cursoCreado = await cursoService.crearCurso(nuevoCurso);
    return res.status(201).json(cursoCreado);
  } catch (error) {
    console.error('Error al crear un nuevo curso: ', error);
    return res.status(400).json({ mensaje: 'Error al crear un nuevo curso' });
  }

}
async function editCurso(req, res) {
  try {
    const cursoId = req.params.id;
    const updatedCursoData = req.body;

    const curso = await cursoService.editCurso(cursoId, updatedCursoData);

    return res.status(200).json({ mensaje: 'Curso actualizado correctamente', curso: curso });
  } catch (error) {
    console.error('Error al editar curso: ', error);
    return res.status(400).json({ mensaje: 'Error al editar curso' });
  }
}

async function deleteCurso(req, res) {
  const { id } = req.params;
  await cursoService.deleteCurso(id);
  return res.status(200).send(`Curso con el ${id} ha sido eliminado exitosamente`);
}

async function buscarCursos(req, res) {
  try {
    const { nombre } = req.body;
    const cursos = await cursoService.buscarCursosPorNombre(nombre);
    return res.json(cursos);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: 'Error en la búsqueda de cursos' });
  }
}


async function novedades(req, res) {
  try {
    const { fecha } = req.body;
    const cursos = await cursoService.buscarCursosRecientes(fecha);
    if (cursos.length === 0) {
      return res.status(404).json({ message: 'No se encontraron cursos recientes' });
    }

    // Devuelve solo los campos nombre, duracion y descripcion
    const novedadesCursos = cursos.map(curso => ({
      nombre: curso.nombre,
      duracion: curso.duracion,
      descripcion: curso.descripcion,
    }));
    return res.json(novedadesCursos);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: 'Error en la búsqueda de cursos' });
  }
}

module.exports = { getAllCursos, getCursoById, createCurso, editCurso, deleteCurso, buscarCursos, novedades }