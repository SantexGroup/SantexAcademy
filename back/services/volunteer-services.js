/* eslint-disable no-useless-catch */
/* eslint-disable object-shorthand */
/* eslint-disable import/order */
// eslint-disable-next-line no-unused-vars
const models = require('../models/index');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const { error } = require('console');

async function getAll() {
  const listVolunteer = await models.usuario.findAll({
    attributes: {
      exclude: [
        'password',
      ],
    },
    include: [
      {
        model: models.rol,
        where: {
          name: 'voluntario',
        },
      },
    ],
  });
  return listVolunteer;
}

async function getById(id) {
  const voluntarioConTarea = await models.usuario.findOne({

    where: {
      id,
    },
    attributes: {
      exclude: [
        'password',
      ],
    },
    include: [
      {
        model: models.tarea,
      },
      {
        model: models.rol,
        where: {
          name: 'voluntario',
        },
      },
    ],
  });

  if (voluntarioConTarea == null) {
    throw new Error('Usuario no encontrado');
  }
  delete voluntarioConTarea.dataValues.password;
  return voluntarioConTarea;
}

async function createUser(name, lastname, email, password, address, phone) {
  const existeUsuario = await models.usuario.findOne({
    where: {
      email,
    },
  });

  if (existeUsuario !== null) throw new Error();

  const nuevoUsuario = await models.usuario.create({
    name,
    lastname,
    email,
    password: await bcrypt.hash(password, 10),
    address,
    phone,
    points: 0,

  });
  const rolVoluntario = await models.rol.findOne({
    where: {
      name: 'voluntario',
    },
  });
  await nuevoUsuario.addRol(rolVoluntario);

  delete nuevoUsuario.dataValues.password;

  return nuevoUsuario;
}

async function editUser(id, name, lastname, dni, email, address, phone, points) {
  const user = await getById(id);

  if (name) {
    user.name = name;
  }

  if (lastname) {
    user.lastname = lastname;
  }

  if (email) {
    user.email = email;
  }

  if (dni) {
    user.dni = dni;
  }

  if (address) {
    user.address = address;
  }

  if (points) {
    user.points = points;
  }

  if (phone) {
    user.phone = phone;
  }

  const userEdited = await user.save();

  delete userEdited.dataValues.password;

  return userEdited;
}

async function modifyPassword(id, currentPassword, newPassword) {
  try {
    const user = await models.usuario.findOne({

      where: {
        id,
      },
      include: [
        {
          model: models.rol,
          where: {
            name: 'voluntario',
          },
        },
        {
          model: models.tarea,
        },
      ],
    });

    const passwordMatch = await bcrypt.compare(currentPassword, user.password);

    if (!passwordMatch) {
      throw new Error('La contraseña actual es incorrecta');
    } else {
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      user.password = hashedPassword;

      const userEdited = await user.save();
      delete userEdited.dataValues.password;
      return userEdited;
    }
  } catch (error) {
    throw new Error('Error al modificar la contraseña');
  }
}

async function deleteUser(id) {
  try {
    const user = await getById(id);

    if (!user) {
      return { error: 'No se encuentra el usuario solicitado' };
    }

    // Obtiene todas las tareas a la que el voluntario está inscripto.
    const tareasInscriptas = await user.getTareas();

    // eslint-disable-next-line no-restricted-syntax
    for (const tarea of tareasInscriptas) {
      // eslint-disable-next-line no-await-in-loop
      const inscrpito = await user.hasTarea(tarea);
      if (inscrpito) {
        // Modifica la cantidad de inscriptos ya que el voluntario se eliminará
        tarea.cantInscriptos -= 1;
        // eslint-disable-next-line no-await-in-loop
        await tarea.save();

        // Se elimina la relacion del voluntario con la tarea.
        // eslint-disable-next-line no-await-in-loop
        await user.removeTarea(tarea);
      }
    }
    // Elimina al voluntario
    await user.destroy();
    return true;
  } catch (error) {
    return { error: 'Error interno en el servidor' };
  }
}

async function login(email, password) {
  const user = await models.usuario.findOne({
    where: {
      email: email,
    },
    include: [
      {
        model: models.rol,
        where: {
          name: 'voluntario',
        },
      },
    ],
  });

  if (!user) {
    throw new Error('Email o contraseña incorrectos');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error('Email o contraseña incorrectos');
  }
  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return token;
}

async function asignarTareaVoluntario(idVolunteer, idTarea) {
  try {
    const voluntario = await getById(idVolunteer);
    const tarea = await models.tarea.findByPk(idTarea);

    if (!voluntario) {
      return { error: 'No se encuentra voluntario con el ID proporcionado' };
    }

    if (!tarea) {
      return { error: 'No se encuentra tarea con el ID proporcionado' };
    }

    const inscripto = await voluntario.hasTarea(tarea);
    if (inscripto) {
      return { error: 'El voluntario ya está inscripto en esta tarea' };
    }
    tarea.cantInscriptos += 1;
    await tarea.save();
    await voluntario.addTarea(tarea, { through: { asistio: false } });

    // const voluntarioConTarea = await models.usuario.findOne({
    //   where: { id: idVolunteer },
    //   include: [{ model: models.tarea }, { model: models.rol, where: { name: 'voluntario' } }],
    // });

    const tareas = await voluntario.getTareas();

    return { voluntario, tareas };
  } catch (error) {
    return { error: 'Error interno en el servidor' };
  }
}

async function canjearPremioService(volunteerId, premioId) {
  try {
    const voluntario = await getById(volunteerId);
    const premio = await models.premio.findByPk(premioId);

    if (!voluntario) {
      return { error: 'No se encuentra voluntario con el ID proporcionado' };
    }

    if (!premio) {
      return { error: 'No se encuentra premio con el ID proporcionado' };
    }

    const puntos = voluntario.points;
    const puntosPremio = premio.costo;

    if (puntos < puntosPremio) {
      return { error: 'No cuenta con la cantidad de puntos para canjear el premio' };
    }

    // Realizar el canje
    await voluntario.addPremio(premio, { through: { date: new Date() } });

    const formattedDate = new Date().toLocaleDateString().replace(/\//g, '-');

    // Crear pdf
    const pdfPath = path.join(__dirname, '../archivo_premios', `${formattedDate}-${voluntario.name}-${voluntario.id}_canje_premio.pdf`);
    const pdfDoc = new PDFDocument();
    pdfDoc.pipe(fs.createWriteStream(pdfPath));
    pdfDoc.fontSize(14).text('Canje de Premio', { align: 'center' });
    pdfDoc.fontSize(12).text(`Voluntario: ${voluntario.lastname}, ${voluntario.name}`);
    pdfDoc.fontSize(12).text(`Premio: ${premio.name}`);
    pdfDoc.fontSize(12).text(`Fecha: ${new Date().toLocaleDateString()}`);
    pdfDoc.end();

    // Actualizar los puntos del voluntario
    voluntario.points -= puntosPremio;
    await voluntario.save();

    // Actualiza la cantidad de premios disponibles:
    premio.cantidad -= 1;
    await premio.save();

    // Obtener el voluntario actualizado con sus premios
    const voluntarioConPremios = await models.usuario.findOne({
      where: { id: volunteerId },
      include: [{ model: models.premio }, { model: models.rol, where: { name: 'voluntario' } }],
    });

    delete voluntarioConPremios.dataValues.password;

    return { success: true, voluntario: voluntarioConPremios, pdfPath: pdfPath };
  } catch (error) {
    return { error: 'Error interno en el servidor' };
  }
}

async function unsuscribe(idTarea, idVolunteer) {
  try {
    const tarea = await models.tarea.findByPk(idTarea);

    const voluntario = await getById(idVolunteer);

    if (!tarea) {
      throw new Error('No se ha encontrado la tarea que se solicito');
    }

    if (!voluntario) {
      throw new Error('No se ha encontrado el voluntario solicitado');
    }

    const inscripto = await voluntario.hasTarea(tarea);

    if (inscripto === true) {
      await voluntario.removeTarea(tarea);
      tarea.cantInscriptos -= 1;
      await tarea.save();

      // const voluntarioActualizado = await models.usuario.findOne({
      //   where: { id: idVolunteer },
      //   include: [
      //     {
      //       model: models.rol,
      //       where: {
      //         name: 'voluntario',
      //       },
      //     },
      //     { model: models.tarea }],
      // });

      // delete voluntarioActualizado.dataValues.password;
      const tareas = await voluntario.getTareas();

      return { success: true, voluntario, tareas };
      // eslint-disable-next-line no-else-return
    } else {
      throw new Error('El voluntario no está inscripto a esta tarea');
    }
  } catch (error) {
    throw new Error(error);
  }
}

async function getDatosVoluntario(userId) {
  try {
    // const voluntario = await models.volunteer.findByPk(userId);
    const voluntario = await getById(userId);
    if (!voluntario) {
      throw new Error('no se encuentra el voluntario deseado');
    }

    const tareas = await voluntario.getTareas();

    voluntario.tareas = tareas;
    const tareasVoluntario = voluntario.tareas || [];
    const hoy = new Date();

    const horasTrabajadas = tareasVoluntario.reduce((total, tarea) => {
      if (tarea.tareasVoluntario && tarea.tareasVoluntario.asistio) {
        return total + tarea.duracion;
      }
      return total;
    }, 0);

    const tareasPendientes = tareasVoluntario.filter((tarea) => {
      const fechaTarea = new Date(tarea.date);
      // eslint-disable-next-line max-len
      return tarea.tareasVoluntario && tarea.tareasVoluntario.asistio === false && fechaTarea >= hoy;
    });

    const puntosAdquiridos = tareasVoluntario.reduce((totalPuntos, tarea) => {
      if (tarea.tareasVoluntario && tarea.tareasVoluntario.asistio) {
        return totalPuntos + tarea.points;
      }
      return totalPuntos;
    }, 0);

    const premiosCanjeados = await voluntario.getPremios();

    return {
      voluntario, horasTrabajadas, tareasPendientes, puntosAdquiridos, premiosCanjeados, tareas,
    };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  // eslint-disable-next-line max-len
  getAll, getById, createUser, editUser, deleteUser, login, modifyPassword, asignarTareaVoluntario, canjearPremioService, unsuscribe, getDatosVoluntario,
};
