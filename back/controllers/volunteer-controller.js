const volunteerServices = require('../services/volunteer-services');
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');
const models = require('../models/index');

async function getDataVoluntario(req, res) {
  const { usuario } = req;

  try {
    const voluntario = await volunteerServices.getById(usuario.id);

    // Devuelve las horas trabajadas
    const tareasVoluntario = voluntario.tareas || [];

    const hoy = new Date();

    const horasTrabajadas = tareasVoluntario.reduce((total, tarea) => {
      if (tarea.tareasVoluntario && tarea.tareasVoluntario.asistio) {
        return total + tarea.duracion;
      }
      return total;
    }, 0);

    // voluntario.horasTrabajadas = horasTrabajadas;

    // Devuelve las tareas pendientes
    const tareasPendientes = tareasVoluntario.filter((tarea) => {
      const fechaTarea = new Date(tarea.date);

      // eslint-disable-next-line max-len
      return tarea.tareasVoluntario && tarea.tareasVoluntario.asistio === false && fechaTarea > hoy;
    });

    // Devuelve los puntos adquiridos en las tareas realizadas
    const puntosAdquiridos = tareasVoluntario.reduce((totalPuntos, tarea) => {
      if (tarea.tareasVoluntario && tarea.tareasVoluntario.asistio) {
        return totalPuntos + tarea.points;
      }
      return totalPuntos;
    }, 0);

    // Devuelve los premios canjeados
    /*
    const premiosCanjeados = await models.premiosMid.findAll({
      where: { volunteerId: voluntario.id },
      include: [
        {
          model: models.premio,
        },
      ],
    });

    if (premiosCanjeados.length > 0) {
      voluntario.premiosCanjeados = premiosCanjeados;
    } else {
      voluntario.premiosCanjeados = [];
    }
    */

    res.status(200).json({
      voluntario, horasTrabajadas, tareasPendientes, puntosAdquiridos,
    });
  } catch (error) {
    console.error('Error al obtener datos del voluntario:', error);
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
    name, lastname, dni, email, password, address, phone,
  } = req.body;

  try {
    // eslint-disable-next-line max-len
    const user = await volunteerServices.createUser(name, lastname, dni, email, password, address, phone);
    res.status(201).send(user);
  } catch (error) {
    next(error);
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

    res.status(200).send(result.voluntario);
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
    res.status(200).send(result.voluntario);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error en el servidor' });
  }
}
module.exports = {
  // eslint-disable-next-line max-len
  getAllVolunteer, getVolunteerById, createVolunteer, editVolunteer, deleteVolunteer, loginVolunteer, getDataVoluntario, modifyPasswordController, asingVolunteerWork, canjearPremioController, unsuscribeVolunteerWork,
};
