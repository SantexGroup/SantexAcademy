const volunteerServices = require('../services/volunteer-services');
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');
const models = require('../models/index');

async function getDataVoluntario(req, res) {
  const { usuario } = req;
  try {
    const data = await volunteerServices.getDatosVoluntario(usuario.id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send('Error interno del servidor');
  }
}

async function getAllVolunteer(req, res, next) {
  try {
    const users = await volunteerServices.getAll();
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
}

async function getVolunteerById(req, res, next) {
  const { id } = req.params;

  try {
    const user = await volunteerServices.getById(id);
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
}

async function createVolunteer(req, res, next) {
  const {
    name, lastname, email, password, address, phone,
  } = req.body;

  try {
    // eslint-disable-next-line max-len
    const user = await volunteerServices.createUser(name, lastname, email, password, address, phone);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error en el servidor' });
  }
}

async function editVolunteer(req, res, next) {
  const { id } = req.params;
  const {
    name, lastname, dni, email, address, phone,
  } = req.body;
  try {
    // eslint-disable-next-line max-len
    const user = await volunteerServices.editUser(id, name, lastname, dni, email, address, phone);

    res.status(201).send(user);
  } catch (error) {
    next(error);
  }
}

async function deleteVolunteer(req, res, next) {
  const { id } = req.params;

  try {
    await volunteerServices.deleteUser(id);

    res.status(200).send(`Usuario con el id ${id} ha sido eliminado exitosamente`);
  } catch (error) {
    next(error);
  }
}

async function loginVolunteer(req, res, next) {
  const { email, password } = req.body;

  try {
    const token = await volunteerServices.login(email, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: 'Credenciales incorrectas' });
    next(error);
  }
}

async function modifyPasswordController(req, res, next) {
  try {
    const { id } = req.params;
    const { currentPassword, newPassword } = req.body;

    const user = await volunteerServices.modifyPassword(id, currentPassword, newPassword);
    res.status(200).json({ user, message: 'contraseña actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al modificar la contraseña' });
    next(error);
  }
}

// eslint-disable-next-line consistent-return
async function asingVolunteerWork(req, res, next) {
  const { idVolunteer, idTarea } = req.body;
  try {
    const result = await volunteerServices.asignarTareaVoluntario(idVolunteer, idTarea);

    if (result.error) {
      return res.status(400).json({ error: result.error });
    }

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

async function canjearPremioController(req, res) {
  const { volunteerId, premioId } = req.body;

  try {
    const result = await volunteerServices.canjearPremioService(volunteerId, premioId);

    if (result.error) {
      return res.status(500).json({ error: result.error });
    }

    // Configura los encabezados de la respuesta para el PDF
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=canje_premio.pdf');

    // Obtén el path del PDF y envíalo como respuesta al cliente
    const pdfPath = result.pdfPath;
    const pdfStream = fs.createReadStream(pdfPath);
    pdfStream.pipe(res);

    // Elimina el archivo después de enviarlo al cliente
    pdfStream.on('end', () => {
      fs.unlinkSync(pdfPath);

      // Envía una respuesta JSON adicional si es necesario
      // res.json({ success: true, voluntario: result.voluntario });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function unsuscribeVolunteerWork (req, res) {
  const { idTarea, idVolunteer } = req.body;

  try {
    const result = await volunteerServices.unsuscribe(idTarea, idVolunteer);

    if (result.error) {
      return res.status(400).json({ error: result.error });
    }
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error en el servidor' });
  }
}
module.exports = {
  // eslint-disable-next-line max-len
  getAllVolunteer, getVolunteerById, createVolunteer, editVolunteer, deleteVolunteer, loginVolunteer, getDataVoluntario, modifyPasswordController, asingVolunteerWork, canjearPremioController, unsuscribeVolunteerWork,
};
