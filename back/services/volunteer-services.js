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
  const user = await getById(id);

  await user.destroy();
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

    // Verificar si el premio ya ha sido canjeado por el voluntario
    // const canjeAnterior = await models.premiosMid.findOne({
    //   where: { volunteerId, premioId },
    // });

    // if (canjeAnterior) {
    //   return { error: 'Este premio ya ha sido canjeado por el voluntario' };
    // }

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

module.exports = {
  // eslint-disable-next-line max-len
  getAll, getById, createUser, editUser, deleteUser, login, modifyPassword, asignarTareaVoluntario, canjearPremioService,
};
