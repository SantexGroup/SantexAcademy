const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const models = require('../models/index');

async function getAll() {
  const listAdmin = await models.usuario.findAll({
    attributes: {
      excludes: 'password',
    },
    include: [
      {
        model: models.rol,
        where: {
          name: 'admin',
        },
      },
    ],
  });
  return listAdmin;
}
async function getById(id) {
  const user = await models.usuario.findOne({
    where: {
      id,
    },
    attributes: {
      excludes: 'password',
    },
    include: [
      {
        model: models.rol,
        where: {
          name: 'admin',
        },
      },
    ],
  });

  if (user == null) {
    throw new Error('Administrador no encontrado');
  }

  return user;
}
async function createUser(email, password) {
  const userCreated = await models.usuario.create({
    email,
    password: await bcrypt.hash(password, 10),
  });
  delete userCreated.dataValues.password;
  return userCreated;
}
async function editUser(id, email) {
  const user = await getById(id);

  if (email) {
    user.email = email;
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
          name: 'admin',
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

async function createAdminDefault(email = 'admin@gmail.com', password = 'Admin123!') {
  const roles = await models.rol.findOne();

  if (roles === null) {
    await models.rol.create({
      name: 'admin',
    });

    await models.rol.create({
      name: 'organizacion',
    });

    await models.rol.create({
      name: 'voluntario',
    });
  }

  const admin = await models.usuario.findOne({
    where: {
      email,
    },
  });
  // eslint-disable-next-line no-useless-return
  if (admin !== null) return;

  const adminCreado = await models.usuario.create({
    name: 'Usuario Admin por defecto',
    email,
    password: await bcrypt.hash(password, 10),
  });
  const rolAdmin = await models.rol.findOne({
    where: {
      name: 'admin',
    },
  });

  await adminCreado.addRol(rolAdmin);
}

const volunteerServices = require('./volunteer-services');
const coordinatorServices = require('./coordinator-services');

async function getDataAdmin(userId) {
  const admin = await getById(userId);

  if (!admin) {
    throw new Error('Admin con id proporcionado no encontrado');
  }

  const cantVolunteer = await volunteerServices.getAll();

  if (!cantVolunteer) {
    throw new Error('No se encontraron voluntarios');
  }

  const cantCoordinator = await coordinatorServices.getAll();
  if (!cantCoordinator) {
    throw new Error('No se encontraron coordinadores/ organizaciones');
  }

  return { cantCoordinator, cantVolunteer, admin };
}
module.exports = {
  getAll, getById, createUser, editUser, deleteUser, login, modifyPassword, createAdminDefault, getDataAdmin,
};
