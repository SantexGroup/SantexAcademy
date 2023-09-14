const { Student } = require('../models');
const { ContactInformation } = require('../models');
const { User } = require('../models');
const { Cohort } = require('../models');

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
          attributes: ['UserName'],
        },
        {
          model: Cohort,
        },
      ],
    });
    return students;
  } catch (error) {
    console.error('Error al obtener los estudiantes:', error);
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
          attributes: ['UserName'],
        },
        {
          model: Cohort,
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

const assignCohortToStudent = async (studentId, cohortId) => {
  try {
    const student = await Student.findByPk(studentId);
    const updatedStudentCount = await student.addCohort(
      cohortId,
    );
    return updatedStudentCount;
  } catch (error) {
    // console.log(error);
    throw new Error('Error al asignar el cohorte al estudiante');
  }
};

const updateStudent = async (id, student) => {
  try {
    // Actualizams el estudiante
    const [updatedStudentCount] = await Student.update(student, {
      where: {
        id,
      },
    });

    // Luego, si es necesario actualizamos la información de contacto
    if (student.ContactInformation) {
      await ContactInformation.update(student.ContactInformation, {
        where: {
          id: student.id_contact_information,
        },
      });
    }
    // Y el usuario
    if (student.User) {
      await User.update(student.User, {
        where: {
          id: student.id_user,
        },
      });
    }

    if (student.Cohorts) {
      // Si deseamos modificar multiples cohorts, podemos hacerlo de esta manera:
      // Removemos la asociación de los cohorts existentes con el estudiante
      // Generamos una nueva
      const studentInstance = await Student.findByPk(id);

      // Reemplazamos con los cohort nuevos
      await studentInstance.setCohorts(student.Cohorts.map((cohort) => cohort.id));
    }

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
  assignCohortToStudent,
};
