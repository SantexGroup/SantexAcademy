const Express = require('express');
const tareaController = require('../controllers/tarea-controller');
const { isAuthenticatedOrganizacion } = require('../middleware/authentication');

const router = Express.Router();

router.get('/get-all', tareaController.getAllTarea);
router.get('/get-by-id/:id', tareaController.getTareaById);
router.get('/get-by-id-organizacion', isAuthenticatedOrganizacion, tareaController.getTareaByIdOrganizacion);
router.post('/create-tarea', isAuthenticatedOrganizacion, tareaController.createTarea);
router.put('/edit-tarea/:id', isAuthenticatedOrganizacion, tareaController.editTarea);
router.delete('/delete-tarea/:id', isAuthenticatedOrganizacion, tareaController.deleteTarea);
router.put('/cambiar-estado/:id', isAuthenticatedOrganizacion, tareaController.editEstado);
router.get('/inscriptos/:id', isAuthenticatedOrganizacion, tareaController.getVolunteersForTask);
router.put('/cambiar-asistencia/', tareaController.editAsistio);
router.get('/ultimas-tareas/', tareaController.tareasRecientes);
module.exports = router;
