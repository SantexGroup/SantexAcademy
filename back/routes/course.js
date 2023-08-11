const Express = require('express');

const router = Express.Router();

// controller
const { courseController } = require('../controllers');

// course routes
router.post('/create', courseController.createCourseCont);

module.exports = router;
