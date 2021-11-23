const { body } = require("express-validator");

exports.validate = function (method) {
  if (method === "login") {
    return [
      body("username")
        .trim()
        .escape()
        .exists()
        .withMessage(() => "El campo es obligatorio.")
        .isLength({ min: 3, max: 255 })
        .withMessage(() => "El campo debe tener entre 3 y 255 caracteres."),
      body("password")
        .trim()
        .escape()
        .exists()
        .withMessage(() => "El campo es obligatorio.")
        .isLength({ min: 5, max: 255 })
        .withMessage(() => "El campo debe tener entre 5 y 255 caracteres."),
      body()
        .custom((item) => {
          const keys = ["username", "recaptcha", "password", "cuit"];
          return Object.keys(item).every((key) => keys.includes(key));
        })
        .withMessage("Hay parámetros no permitidos en su consulta."),
    ];
  } else if (method === "register") {
    return [
      body("password")
        .trim()
        .escape()
        .exists()
        .withMessage(() => "El campo es obligatorio.")
        .isLength({ min: 5, max: 255 })
        .withMessage(() => "El campo debe tener entre 5 y 255 caracteres.")
        //.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,}$/)
        .matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[$@$_!%*?&])[A-Za-z\d$@$_!%*?&]{5,}$/)
        .withMessage(() =>"El password no tiene el formato correcto"
        ),
        body("email")
        .trim()
        .escape()
        .exists()
        .withMessage(() => "El campo es obligatorio.")
        .isLength({ min: 5, max: 255 })
        .withMessage(() => "El campo debe tener entre 5 y 255 caracteres.")
        .matches(/^[-!#$%&'*+0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/)
        .withMessage(() =>"El email no tiene el formato correcto"
        ),
    ];
  } else {
    return [];
  }
};
