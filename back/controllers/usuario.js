// const jwt = require('jsonwebtoken');
const { userService } = require("../services");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  try {
    const {  fullName, email, password } = req.body;

    // Verificar credenciales
    const user = await userService.loginUser(email, password);

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" }); // Retorna aquí para evitar el envío doble de respuestas
    }

    // Generar token
    const token = jwt.sign(
      {
        id: user.id,
        fullName: user.fullName,
        telefono: user.telefono,
        email: user.email,
        password: user.password,
        reputation: user.reputation,
        recompensasAcumuladas: user.recompensasAcumuladas,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt,
        cestaRecompensasId: user.cestaRecompensasId,
        rolesId: user.roleId,
      },
      process.env.SESSION_SECRET,
      // {
      //   expiresIn: "1h",
      // }
    );

    console.log(token)
    // Envía la respuesta una vez que tengas el token
    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
  }
};


const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

// const createUser = async (req, res) => {
//   try {
//     Verifica la autenticación del usuario que está realizando la creación
//     passport.authenticate('jwt', { session: false }, async (err, user, info) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).send(err.message);
//       }
//       if (!user) {
//         Usuario no autenticado
//         return res.status(401).json({ message: 'Unauthorized' });
//       }

//       Solo los usuarios autenticados con el rol 'admin' pueden crear otros usuarios
//       if (user.roleId !== 1) {
//         return res.status(403).json({ message: 'Permission denied' });
//       }

//       Creación del usuario
//       const newUser = await userService.createUser(req.body);
//       res.status(201).json(newUser);
//     })(req, res);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send(err.message);
//   }
// };

// Se pasan req.query y req.body por que son los parametros que se pasan por la url y por el body
const getUsersByCriteria = async (req, res) => {
  try {
    const queryOptions = req.query;
    const bodyOptions = req.body;
    const organizations = await userService.getUsersByCriteria(
      queryOptions,
      bodyOptions
    );
    res.json(organizations);
  } catch (err) {
    res.status(500).json({ action: "getUserByCriteria", error: err.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.updateUserById(id, req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ action: "updateUserById", error: err.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.deleteUserById(id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ action: "deleteUserById", error: err.message });
  }
};

module.exports = {
  loginUser,
  createUser,
  getUsersByCriteria,
  updateUserById,
  deleteUserById,
};
