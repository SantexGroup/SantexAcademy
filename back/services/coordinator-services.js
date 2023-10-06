const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const models = require('../models/index');

async function getAll() {
  const listCoord = await models.usuario.findAll({
    attributes: {
      exclude: [
        'password',
      ],
    },
    include: [
      {
        model: models.rol,
        where: {
          name: 'organizacion',
        },
      },
    ],
  });

  return listCoord;
}

async function getById(id) {
  const user = await models.usuario.findByPk(id);

  if (user == null) {
    throw new Error('Usuario no encontrado');
  }

  return user;
}

async function createUser(name, description, email, password, address, phone) {
  // eslint-disable-next-line no-useless-catch
  const existeUsuario = await models.usuario.findOne({
    where: {
      email,
    },
  });
  if (existeUsuario !== null) throw new Error();
  const organizacion = await models.usuario.create({
    name,
    description,
    email,
    password: await bcrypt.hash(password, 10),
    address,
    phone,
  });

  const rolOrganizacion = await models.rol.findOne({
    where: {
      name: 'organizacion',
    },
  });
  await organizacion.addRol(rolOrganizacion);

  delete organizacion.dataValues.password;
  return organizacion;
}

async function editUser(id, name, description, email, address, phone) {
  const user = await getById(id);

  if (name) {
    user.name = name;
  }
  if (description) {
    user.description = description;
  }
  if (email) {
    user.email = email;
  }

  if (address) {
    user.address = address;
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
  const user = await models.usuario.findOne({
    where: {
      email,
    },
    include: [
      {
        model: models.rol,
        where: {
          name: 'organizacion',
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

const tareaServices = require('./tarea-services');

async function getDataCoordinator(userId) {
  // eslint-disable-next-line no-useless-catch
  try {
    const coordinador = await getById(userId);

    if (!coordinador) {
      throw new Error('No se encuentra coordinador con el id proporcionado');
    }

    const tareas = await tareaServices.getByIdOrganizacion(userId);

    coordinador.tareas = tareas;

    let totalInscriptos = 0;
    let totalPuntosOtorgados = 0;
    const hoy = new Date();
    const proximasTareas = [];

    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const tarea of tareas) {
      const fechaTarea = new Date(tarea.date);

      if (fechaTarea >= hoy) {
        proximasTareas.push(tarea);
      }
      const inscriptos = tarea.cantInscriptos;
      // eslint-disable-next-line no-restricted-syntax, guard-for-in, no-plusplus
      for (let i = 0; i < inscriptos; i++) {
        totalInscriptos += 1;
        totalPuntosOtorgados += tarea.points;
      }
    }
    proximasTareas.sort((a, b) => new Date(a.date) - new Date(b.date));

    return {
      coordinador,
      totalInscriptos,
      totalPuntosOtorgados,
      proximasTareas,
    };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAll, getById, createUser, editUser, deleteUser, login, modifyPassword, getDataCoordinator,
};
