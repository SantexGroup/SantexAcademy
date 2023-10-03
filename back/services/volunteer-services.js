/* eslint-disable no-useless-catch */
/* eslint-disable object-shorthand */
/* eslint-disable import/order */
// eslint-disable-next-line no-unused-vars
const { DataTypes, Sequelize } = require('sequelize');
const volunteerModel = require('../models/volunteer-model');
const models = require('../models/index');

const jwt = require('jsonwebtoken');
const { sequelize } = require('../models');
const bcrypt = require('bcrypt');

const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const Volunteer = volunteerModel(sequelize, DataTypes);

async function getAll() {
  const listVolunteer = await Volunteer.findAll();
  return listVolunteer;
}

async function getById(id) {
  const voluntarioConTarea = await models.volunteer.findOne({
    where: { id },
    include: [{ model: models.tarea }],
  });

  if (voluntarioConTarea == null) {
    throw new Error('Usuario no encontrado');
  }
  delete voluntarioConTarea.dataValues.password;
  return voluntarioConTarea;
}

async function createUser(name, lastname, dni, email, password, address, phone) {
  const user = new Volunteer();

  user.name = name;
  user.lastname = lastname;
  user.dni = dni;
  user.email = email;
  user.password = await bcrypt.hash(password, 10);
  user.address = address;
  user.phone = phone;

  const userCreated = await user.save();
  delete userCreated.dataValues.password;

  return userCreated;
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
    const user = await getById(id);

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
  } catch (error) {
    return { error: 'Error interno en el servidor' };
  }
}

async function login(email, password) {
  const user = await Volunteer.findOne({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new Error('Email o contraseña incorrectos');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error('Email o contraseña incorrectos');
  }
  const token = jwt.sign({ id: user.id, tipoUsuario: 'voluntario' }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return token;
}

async function asignarTareaVoluntario(idVolunteer, idTarea) {
  try {
    const voluntario = await models.volunteer.findByPk(idVolunteer);
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

    const voluntarioConTarea = await models.volunteer.findOne({
      where: { id: idVolunteer },
      include: [{ model: models.tarea }],
    });

    delete voluntarioConTarea.dataValues.password;

    return { success: true, voluntario: voluntarioConTarea };
  } catch (error) {
    return { error: 'Error interno en el servidor' };
  }
}

async function canjearPremioService(volunteerId, premioId) {
  try {
    const voluntario = await models.volunteer.findByPk(volunteerId);
    const premio = await models.premios.findByPk(premioId);

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
    await voluntario.addPremio(premio, { through:{date: new Date() } });

    const formattedDate = new Date().toLocaleDateString().replace(/\//g, '-');

    //Crear pdf
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

    //Actualiza la cantidad de premios disponibles:
    premio.cantidad -= 1;
    await premio.save();

    // Obtener el voluntario actualizado con sus premios
    const voluntarioConPremios = await models.volunteer.findOne({
      where: { id: volunteerId },
      include: [{ model: models.premios }],
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

    const voluntario = await models.volunteer.findByPk(idVolunteer);

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
      console.log('desuscripto');

      const voluntarioActualizado = await models.volunteer.findOne({
        where: { id: idVolunteer },
        include: [{ model: models.tarea }],
      });

      delete voluntarioActualizado.dataValues.password;

      return { success: true, voluntario: voluntarioActualizado };
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
      return tarea.tareasVoluntario && tarea.tareasVoluntario.asistio === false && fechaTarea > hoy;
    });

    const puntosAdquiridos = tareasVoluntario.reduce((totalPuntos, tarea) => {
      if (tarea.tareasVoluntario && tarea.tareasVoluntario.asistio) {
        return totalPuntos + tarea.points;
      }
      return totalPuntos;
    }, 0);

    const premiosCanjeados = await voluntario.getPremios();

    return {
      voluntario, horasTrabajadas, tareasPendientes, puntosAdquiridos, premiosCanjeados,
    };
  } catch (error) {
    console.error('Error en getDatosVoluntario:', error);
    throw error;
  }
}


module.exports = {
  // eslint-disable-next-line max-len
  getAll, getById, createUser, editUser, deleteUser, login, modifyPassword, asignarTareaVoluntario, canjearPremioService, unsuscribe, getDatosVoluntario,
};
