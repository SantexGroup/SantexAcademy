const { body } = require('express-validator');

exports.validate = function (method) {
  if (method === 'altaDog') {
    return [
      body('nombreDog').trim().escape()
        .exists()
        .withMessage(() => 'El campo nombre es obligatorio.')
        .isLength({ min: 3, max: 255 })
        .withMessage(() => 'El campo nombre no puede estar vacio.'),
        body('raza').trim().escape()
        .exists()
        .withMessage(() => 'El campo nombre es obligatorio.')
        .isLength({ min: 3, max: 255 })
        .withMessage(() => 'El campo raza no puede estar vacio.'),
        body('fechaNacimiento').trim().escape()
        .exists()
        .withMessage(() => 'El campo nombre es obligatorio.')
        .isLength({ min: 3, max: 255 })
        .withMessage(() => 'El campo fecha Nacimiento debe estar indicada.'),
      
     /* body().custom((item) => {
       const keys = ['nombreDog', 'raza', 'fechaNacimiento'];
       return Object.keys(item).every((key) => keys.includes(key));
      }).withMessage('No debe haber campos vacios.'),*/
    ];
  }
  else {
    return []; 
  }
 
 };
