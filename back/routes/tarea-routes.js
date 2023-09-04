const Express = require('express');
const tareaController = require('../controllers/tarea-controller');

const router = Express.Router();

router.get('/get-all', tareaController.getAllTarea);
router.get('/get-by-id/:id', tareaController.getTareaById);
router.post('/create-tarea', tareaController.createTarea);
router.put('/edit-tarea/:id', tareaController.editTarea);
router.delete('/delete-tarea/:id', tareaController.deleteTarea);

module.exports = router;
