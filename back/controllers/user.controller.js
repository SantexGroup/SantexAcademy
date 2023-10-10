const usercontroller = {};
const { error } = require("winston");
const { User } = require("../models");
const { router, param } = require("../routes");
const Op = require("sequelize").Op;

/**
 * @method POST
 * @name create
 * @body {firstName: STRING,
    lastName: STRING,
    email: STRING,
    password:STRING,
    username string,
    profilePic: STRING,
  }
 * @description metodo para registrar un usuario.
     debe corroborar que no el usuario no este registrado previamente ( no pueden coincidir username o mail)
 */
usercontroller.create = async (req, res) => {
  try {
    console.log(req.body);
    //buscamos el usuario
    u = await User.findOne({
      where: {
        [Op.or]: [
          {
            email: req.body.email,
            username: req.body.username,
          },
        ],
      },
    });
    if (u) {
      console.log(u);
      return res.status(400).json({ msg: "El usuario ya existe" });
    }
    if (req.file) {
      req.body.profilePic =
        process.env.DIRECCION + "/public/" + req.file.filename;
    }

    a = await User.create(req.body);
    return res.status(200).json({ msg: "usuario creado correctamente", user: a });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Error creando el usuario" });
  }
};
//getOne
usercontroller.getOne = async (req, res) => {
  User.findByPk(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

//get ALL
usercontroller.getAll = (req, res) => {
  User.findAll()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};
//edit
usercontroller.edit = async (req, res) => {
  req.body.profilePic = process.env.DIRECCION + "/public/" + req.file.filename;
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};
//delete
usercontroller.delete = async (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};
//login busca si coincide el mail o el  nombre de usuario y el password
usercontroller.login = async (req, res) => {
  try {
    let parameter;
    if (req.body.email) {
      parameter = req.body.email;
    } else {
      parameter = req.body.username;
    }
    const user = await User.findOne({
      where: {
        [Op.or]: [
          {
            email: parameter
          },
          {
            username: parameter
          },
        ],
      },
    });
    if (!user) {
      return res.status(400).json({ msg: "El usuario no existe" });
    }
    if (user.password !== req.body.password) {
      return res.status(400).json({ msg: "Contraseña incorrecta" });
    }
    return res.status(200).json({ msg: "Bienvenido", user });
  } catch (error) {
    return res.status(400).json({ msg: "Error en el login" });
  }
};
module.exports = usercontroller;
