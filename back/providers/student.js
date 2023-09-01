const { Student } = require('../models');
const { ContactInformation } = require('../models');
const { User } = require('../models');

const getAllStudents = async () => {
  try {
    const students = await Student.findAll({
      include: [
        {
          model: ContactInformation,
          attributes: ['phone_number', 'country', 'state', 'address', 'email'],
        },
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    return students;
  } catch (error) {
    throw new Error('Error al obtener los estudiantes');
  }
};

const getStudentById = async (id) => {
  try {
    const student = await Student.findByPk(id, {
      include: [
        {
          model: ContactInformation,
          attributes: ['phone_number', 'country', 'state', 'address', 'email'],
        },
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    return student;
  } catch (error) {
    throw new Error('Error al obtener el estudiante');
  }
};

const createStudent = async (student) => {
  try {
    const newStudent = await Student.create(student);
    return newStudent;
  } catch (error) {
    throw new Error('Error al crear el estudiante');
  }
};

const updateStudent = async (id, student) => {
  try {
    const [updatedStudentCount] = await Student.update(student, {
      where: {
        id,
      },
    });
    return updatedStudentCount;
  } catch (error) {
    throw new Error('Error al actualizar el estudiante');
  }
};

const deleteStudent = async (id) => {
  try {
    const deletedStudentCount = await Student.destroy({
      where: {
        id,
      },
    });
    return deletedStudentCount;
  } catch (error) {
    throw new Error('Error al eliminar el estudiante');
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
