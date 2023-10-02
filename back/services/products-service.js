require('dotenv').config();

const jwt = require('jsonwebtoken');
const { User, Direccion } = require('../models');
const { User, Direccion, localidad } = require('../models');

// login
async function login(mail, password) {
@@ -59,9 +59,27 @@ async function userRegister(
// usuario por id

async function getUserFromId(id) {
  const user = await User.findByPk(id);

  return user;
  try {
    const usuario = await User.findByPk(id, {
      include: [
        {
          model: Direccion,
          attributes: ['idLocalidad', 'calleYaltura'],
          include: [
            {
              model: localidad,
              attributes: ['idProvincia', 'nombre'],
            },
          ],
        },
      ],
    });

    return usuario;
  } catch (error) {
    console.error(`Error al buscar el usuario: ${error.message}`);
    throw error;
  }
}

// cambiar estado de vendedor
@@ -86,13 +104,52 @@ async function cambiarEstadoVendedor(id) {

// editar usuario

async function editUsuario(id, firstName, lastName, dni, mail, password, alias,
  idLocalidad, calleYAltura) {
  const user = await getUserFromId(id);
/* async function editUsuario(
  id,
  firstName,
  lastName,
  dni,
  mail,
  password,
  alias,
  idLocalidad,
  calleYAltura,
  idProvincia
) {
  const user = await getUserFromId(id, true);
  if (!user) {
    throw new Error(`Usuario con ID ${id} no encontrado`);
  }
  let direccion = user.direccion;
  if (!direccion) {
    direccion = await Direccion.create({
      idLocalidad,
      calleYAltura,
    });
  } else {
    if (idLocalidad) {
      direccion.idLocalidad = idLocalidad;
    }
    if (calleYAltura) {
      direccion.calleYAltura = calleYAltura;
    }
  }
  if (direccion.changed()) {
    await direccion.save();
    user.idDireccion = direccion.id;
  }
  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }
@@ -113,19 +170,18 @@ async function editUsuario(id, firstName, lastName, dni, mail, password, alias,
    user.alias = alias;
  }
  if (idLocalidad) {
    user.idLocalidad = idLocalidad;
  }

  if (calleYAltura) {
    user.calleYAltura = calleYAltura;
  if (idProvincia) {
    const localidad = await localidad.findOne({ where: { id: idLocalidad } });
    if (localidad) {
      await localidad.update({ idProvincia });
    }
  }
  const userEdited = await user.save();
  return userEdited;
}
} */

module.exports = {
  login, userRegister, cambiarEstadoVendedor, getUserFromId, editUsuario,
  login, userRegister, cambiarEstadoVendedor, getUserFromId,
};