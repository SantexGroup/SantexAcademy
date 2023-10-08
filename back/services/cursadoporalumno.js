const { CursadoPorAlumno } = require('../models');

  
  const createCursadoPorAlumno = async (userId, courseId, notas, notaFinal, asistencia, condAsistencia) => {
    try {
      const cursadoPorAlumno = await CursadoPorAlumno.create({
        userId,
        courseId,
        notas,
        notaFinal,
        asistencia,
        condAsistencia,
      });
      return cursadoPorAlumno;
    } catch (error) {
      throw new Error('No se pudo crear el registro de cursado por alumno.');
    }
  };

  
  const getCursadoPorAlumnoById = async (id) => {
    try {
      const cursadoPorAlumno = await CursadoPorAlumno.findByPk(id);
      return cursadoPorAlumno;
    } catch (error) {
      throw new Error('No se pudo obtener el registro de cursado por alumno.');
    }
  };

  
   const updateCursadoPorAlumnoById = async (id, updatedData) => {
    try {
      const [updatedRowsCount] = await CursadoPorAlumno.update(updatedData, {
        where: { id },
      });
      if (updatedRowsCount === 0) {
        throw new Error('Registro no encontrado.');
      }
      return updatedRowsCount;
    } catch (error) {
      throw new Error('No se pudo actualizar el registro de cursado por alumno.');
    }
  };

  // Función para eliminar un registro de cursado por alumno por ID
  const deleteCursadoPorAlumno = async (id) => {
    try {
      const cursoporalumno = await CursadoPorAlumno.findByPk(id);
      if (!cursoporalumno) {
        throw new Error('No encontrado en service.');
      }
  
      await cursoporalumno.update({ estado: 'B' });
      return cursoporalumno;
    } catch (error) {
      throw new Error('Hubo un error al eliminar el curso.');
    }
  };

 
module.exports = {
    createCursadoPorAlumno,
    getCursadoPorAlumnoById,
    updateCursadoPorAlumnoById,
    deleteCursadoPorAlumno,
};