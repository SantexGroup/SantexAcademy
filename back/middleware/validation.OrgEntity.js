const { body } = require("express-validator");

// Reglas de validación para crear y actualizar una organización
const createAndUpdateOrganizationValidation = [
  body("name")
    .isLength({ min: 2 })
    .withMessage("El nombre debe tener al menos 2 caracteres"),

  body("description")
    .isLength({ min: 2 })
    .withMessage("La descripción debe tener al menos 2 caracteres"),

  body("email").isEmail().withMessage("El correo electrónico no es válido"),

  body("phone")
    .optional()
    .matches(/^(?:\d{7,14}|\d{2}[ -]?\d{4}[ -]?\d{4})$/)
    .withMessage("El número de teléfono no es válido para Argentina"),

  body("cuit")
    .matches(/^(?:[0-9]{11}|[0-9]{2}-[0-9]{8}-[0-9])$/)
    .withMessage(
      "El CUIT no es válido. Debe tener el formato XX-XXXXXXXX-X o XXXXXXXXXXX."
    ),

  body("location")
    .isLength({ min: 2 })
    .withMessage("La ubicación debe tener al menos 2 caracteres"),

  body("password")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/)
    .withMessage(
      "La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un símbolo, y tener al menos 8 caracteres de longitud"
    ),

  body("category")
    .isIn([
      "medio ambiente y fauna",
      "asistencia social",
      "salud y discapacidad",
    ])
    .withMessage("La categoría no es válida"),
];

// Reglas de validación para iniciar sesión de organización
const loginOrganizationValidation = [
  body("email").isEmail().withMessage("El correo electrónico no es válido"),

  body("cuit")
    .matches(/^(?:[0-9]{11}|[0-9]{2}-[0-9]{8}-[0-9])$/)
    .withMessage("El CUIT no es válido."),

  body("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres.")
    .bail() // Este método detiene la cadena de validación si alguna de las validaciones anteriores ha fallado
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i")
    .withMessage(
      "La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un símbolo."
    ),
];

module.exports = {
  createAndUpdateOrganizationValidation,
  loginOrganizationValidation,
};
