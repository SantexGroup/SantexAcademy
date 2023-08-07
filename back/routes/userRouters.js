const express = require('express');

const router = express.Router();
// const userController = require('../controllers/userController');

// crear un usuario
// comentarios hechos para que husky me deje subir los archivos
// router.post('/register', userController.createUser);

/* ingresar a la app */
router.post('/loggin', (req, res) => {
  res.json({
    response: 'hola soy un loggin',
  });
});
/* obtener un usuario */
router.get('/:userId', (req, res) => {
  res.json({
    response: 'hola soy un usuario',
  });
});
/* obtener todos los usuarios */
router.get('/user', (req, res) => {
  res.json({
    response: 'devuelve todos los usuarios',
  });
});
/* modificar usuario */
router.put('/:userId', (req, res) => {
  res.json({
    response: 'modifico un usuario',
  });
});
/* eliminar usuario */
router.delete('/', (req, res) => {
  res.json({
    response: 'elimino un usuario',
  });
});

module.exports = router;
