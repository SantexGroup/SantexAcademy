// Los servicios disponibles para usuarios son : Crear un nuevo usuario, actualizar un usuario,
// eliminar un usuario y Login.

const { User } = require('../models');
const jwt = require('../node_modules/jsonwebtoken');
const bcrypt = require('../node_modules/bcrypt');

//
//
// Servicio que recupera los datos ingresados y los guarda para crear un usuario.

// const recordUser = async (req, res) => {
//   const {
//     body,
//   } = req;
//   try {
//     await User.create(body);
//     res.status(201).json({
//       msg: 'Usuario creado correctamente',
//     });
//   } catch (error) { // Si hay un error lo capturamos
//     console.log(error);
//     res.status(401).json({
//       msg: 'Ups, algo salio mal',
//     });
//   }
// };
async function recordUser(nick, password, name, lastName, email, phone, rolesId) {
  try {
    const userCreated = await User.create({
      roles_id: rolesId,
      nick,
      password,
      name,
      lastName,
      email,
      phone,
    });

    return userCreated;
  } catch (error) {
    console.error('Error al guardar el usuario:', error);
    throw error; // Re-lanzamos el error para que el llamador lo maneje adecuadamente
  }
}

/*
async function recordUser(id, nick, password, name, lastName, email, phone, rolesId, deleted) {
  const user = new User();
  user.id = id;
  user.roles_id = rolesId;
  user.nick = nick;
  user.password = password;
  user.name = name;
  user.lastname = lastName;
  user.email = email;
  user.phone = phone;
  user.deleted = deleted || false;
>>>>>>> 66487c468685d1e50ece563b59facd8c12492e86

  const userCreated = await user.save();
  return userCreated;
}
*/

// Servicio que autoriza login

async function login(nick, password) {
  try {
    const user = await User.findOne({
      where: {
        nick,
      },
    });

    if (!user) {
      throw new Error('El email y/o contraseñas son incorrectos');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('El email y/o contraseñas son incorrectos');
    }

    const token = jwt.sign(
      {
        id: user.id,
        nick: user.nick,
        email: user.email,
      },
      'Clave',
    );

    return {
      accessToken: token,
    };
  } catch (error) {
    throw new Error('Ha ocurrido un error en el proceso de inicio de sesión');
  }
}
// Servicio que actualiza datos de un usuario

async function updateUser(id, nick, password, name, lastName, email, phone) {
  const user = await User.findByPk(id);
  if (id) {
    user.id = id;
  }
  if (nick) {
    user.nick = nick;
  }
  if (password) {
    user.password = password;
  }
  if (name) {
    user.name = name;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (email) {
    user.email = email;
  }
  if (phone) {
    user.phone = phone;
  }
  const userEdited = await user.save();
  return userEdited;
}

/*
const updateUser = async (req, res) => {
  const {
    body,
  } = req;
  const {
    id,
  } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.update(body);
      res.json({
        msg: 'Sus datos se actualizaron correctamente',
      });
    } else {
      res.status(404).json({
        msg: 'Usuario no encontrado',
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      msg: 'Ups, ocurrio un error',
    });
  }
};
*/

//
// Exportamos el servicio para inyectar en el controlador
module.exports = {
  recordUser,
  updateUser,
  login,
};
